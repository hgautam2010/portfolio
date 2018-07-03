$(function () {
  var $content = $('#jsonContent');
  var data = {
    rss_url: 'https://www.medium.com/feed/@tosfan4ever'
  };
  $.get('https://api.rss2json.com/v1/api.json', data, function (response) {
    if (response.status == 'ok') {
      // If it there is any article to add then add it
      if (response.items.length > 0) {

        //Remove clearfix
        var cfix = document.getElementsByClassName('clearfix');
        for (var i = 0; i < cfix.length; i++) {
          cfix[i].parentNode.removeChild(cfix[i]);
        }

        // Adding articles in work-cards
        var items = response.items;
        for (var i = 0; i < items.length; i++) {

          //If Blog in addable then add it
          if (blogs.indexOf(items[i].title) > -1) {

            var item = items[i];

            // Extracting image from medium
            var src = extractImage(item.description);

            // Extracting description
            var description = extractDescription(item.description);

            var node = document.createElement('div');
            node.className += "col-sm-6 col-md-4 col-lg-3 work-card fadeIn-on-scroll filter writings show";
            node.innerHTML = `
            <!-- New Cards -->
             <div class="gallery">
              <a href="${item.link}" target="_blank">
                <div class="card card-profile work-card-profile">
                   <div class="card-cover" style="height: 200px; background-image: url('${src}');)">
                   </div>
                   <div class="card-body work-card-body">
                       <h4 class="card-title">${item.title}</h4>
                       <h6 class="blog">Blog</h6>
                       <p class="card-description">
                         ${description}
                       </p>
                   </div>
                 </div>
               </a>
            </div>
            <!-- End of New Cards -->

            `;

            //Append Child
            var parent = document.getElementById('work-cards');
            parent.appendChild(node);

          }
        }

        // Adding Clearfix at the end
        // parent.innerHTML += `<!-- ClearFix -->
        // <div class="clearfix"></div>`;
      }
    }
  });
});

function extractImage(str) {

  var tagIndex = str.indexOf('<img'); // Find where the img tag starts
  var srcIndex = str.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
  var srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
  var srcEnd = str.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
  var src = str.substring(srcStart, srcEnd); // Extract just the URL
  src = ((src.indexOf('cdn-images-1') > -1)?src:'assets/images/default.jpg'); // Is it really an image address or not
  return src;

}

function extractDescription(str) {

  var yourString = str.replace(/<img[^>]*>/g,"");
  yourString = yourString.replace(/<[^>]+>/g, '');
  var trimmedString = yourString.substr(0, 400);
  trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
  return trimmedString;

}
