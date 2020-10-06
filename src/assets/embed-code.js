        (function() {
          function init() {
            var scriptElement = document.createElement('script');
            scriptElement.type = 'text/javascript';
            scriptElement.async = true;
            scriptElement.src = 'https://cdn.inksoft.com/FrontendApps/storefront/assets/scripts/designer-embed.js';
            scriptElement.onload = function() { launchDesignStudio() 
            };
            document.getElementsByTagName('body')[0].appendChild(scriptElement);
          }

          function launchDesignStudio() {
            window.inksoftApi.launchEmbeddedDesignStudio({
              targetElementId: 'inksoftEmbed',
              domain: 'https://stores.inksoft.com',
              cdnDomain: 'https://cdn.inksoft.com',
              storeUri: 'DS509063609',
              productId: 123456
            });
          }

          init();
        })();