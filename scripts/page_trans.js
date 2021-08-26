// window.onpageshow  = 
// setTimeout(function(){ 
   
//     document.querySelector(".scene_element").classList.add('scene_element--fadein');      
//     // console.log('hi')
//     return null;

//  }, 3000);
import SwupHeadPlugin from '@swup/head-plugin';
import Swup from 'swup';
import SwupJsPlugin from '@swup/js-plugin';
import SwupScriptsPlugin from '@swup/scripts-plugin';
// import SwupBodyClassPlugin from '@swup/body-class-plugin';
import SwupOverlayTheme from '@swup/overlay-theme';
import SwupPreloadPlugin from '@swup/preload-plugin';
import SwupProgressPlugin from '@swup/progress-plugin';
import SwupGtmPlugin from '@swup/gtm-plugin';
const swup = new Swup({
  
    plugins: [new SwupHeadPlugin({
       
      }),
    //   new SwupJsPlugin(),
      new SwupScriptsPlugin({
       
       
      }),
      new SwupOverlayTheme({
        color: '#110f10',
        duration: 1200,
        direction: 'to-right',
      }),
      new SwupGtmPlugin({
      }),
    //   new SwupJsPlugin(options)
    ]
  });



//   const options = [
//     {
//       from: '(.*)',
//       to: '(.*)',
//       in: function(next) {
//         document.querySelector('#swup').style.opacity = 0;
//         TweenLite.to(document.querySelector('#swup'), .5, {
//           opacity: 1,
//           onComplete: next
//         });
//       },
//       out: (next) => {
//         document.querySelector('#swup').style.opacity = 1;
//         TweenLite.to(document.querySelector('#swup'), 0.5, {
//           opacity: 0,
//           onComplete: next
//         });
//       }
//     }
//   ];
  
 