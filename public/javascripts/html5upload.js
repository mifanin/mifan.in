(function($){
	$.fn.mutiUpload=function(conf){
		//var trigger=conf.trigger;//example:[url=abc.jpg]
		//conf.fix=='width';
		//conf.fix=='height';
		var area=$(this);
		var clickButton=area.find('.select');
		clickButton.css({'cursor':'pointer'});
		var fileUploadControl=$('<input type="file" multiple="true" id="mifan_upload" name="mifan_upload">').css({display:'none'});
		clickButton.on('click',function(){
			fileUploadControl.on('change',function(){
				var files=$(this)[0].files;
				for(var i in files){
					var reader=new FileReader();
					reader.onload = function(e){
						//area.html("");
						var img=$('<img src='+this.result+'>').css({border:'0px',width:area.width()});
						area.append(img);
					};
					reader.readAsDataURL(files[i]);
				}
			});
			fileUploadControl.click();
		});
	}
})(jQuery)