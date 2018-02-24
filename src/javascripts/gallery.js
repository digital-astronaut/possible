import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
"use strict";

(function () {

  $(document).ready(
    ()=>{
      let galleryPhotos = $('.gallery__photo');
      let galleryThumbnails = $('.gallery__thumbnail');
      let activePhoto = 0;
      let nextBt = $('#next');
      let prevBt = $('#prev');
      let thumbnailsOffset = 0;
      let thumbnailsOffsetDistance = '';





      galleryThumbnails.click(function()
      {

        galleryThumbnails.removeClass('gallery__thumbnail--active');
        galleryPhotos.removeClass('gallery__photo--active');
        activePhoto = galleryThumbnails.index(this);
        galleryThumbnails.eq(activePhoto).addClass('gallery__thumbnail--active');
        galleryPhotos.eq(activePhoto).addClass('gallery__photo--active');

      });

      nextBt.click(
        ()=>{
          if(thumbnailsOffset<galleryPhotos.length-6){
            thumbnailsOffset++;
            thumbnailsOffsetDistance = (-thumbnailsOffset*16.66666)+'%';
            galleryThumbnails.eq(0).css('margin-left',thumbnailsOffsetDistance);
            prevBt.prop("disabled", false).removeClass('gallery__prev--disabled');
          }
          if(thumbnailsOffset===galleryPhotos.length-6){

            nextBt.prop("disabled", true).addClass('gallery__next--disabled');


          }

        }
      );
      prevBt.click(
        ()=>{
          if(thumbnailsOffset>0){
            thumbnailsOffset--;
            thumbnailsOffsetDistance = (-thumbnailsOffset*16.66666)+'%';
            galleryThumbnails.eq(0).css('margin-left',thumbnailsOffsetDistance);
            nextBt.prop("disabled", false).removeClass('gallery__next--disabled');;
          }
          if(thumbnailsOffset===0){

            prevBt.prop("disabled", true).addClass('gallery__prev--disabled');

          }

        }
      );


    }
  );

})();
