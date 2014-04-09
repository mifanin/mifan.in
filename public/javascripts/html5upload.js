(function($){
	var upload=function(url,form){
		console.log(form);
		$.ajax({
			url:url,
			type:'POST',
			data:form,
			processData: false,
			contentType: false,
			success:function(data){
				console.log(data.result);
			}
		});
	};

	$.fn.mutiUpload=function(conf){
		//var trigger=conf.trigger;//example:[url=abc.jpg]
		//conf.fix=='width';
		//conf.fix=='height';
		var uploadUrl=null;
		if(conf && conf.url){
			uploadUrl=conf.url;
		}else{
			throw 'upload url has not config';
		}
		var area=$(this);
		var clickButton=area.find('.select');
		clickButton.css({'cursor':'pointer'});
		var fileUploadControl=$('<input type="file" multiple="true" id="mifan_upload" name="mifan_upload">').css({display:'none'});
		clickButton.on('click',function(){
			fileUploadControl.on('change',function(){
				var files=$(this)[0].files;
				var form=new FormData();
				for(var i in files){
					var reader=new FileReader();
					reader.onload = function(e){
						var img=$('<img src='+this.result+'>').css({border:'0px',width:area.width()});
						area.append(img);
					};
					form.append('files',files[i]);
					reader.readAsDataURL(files[i]);
				}
			});
			upload(uploadUrl,form);
			fileUploadControl.click();
		});
		var border=area.css('border');
		area.on('dragenter',function(e){
			$(this).css('border','2px dashed #6633FF');
			var event=e.originalEvent;
			event.stopPropagation();
			event.preventDefault();
		}).on('dragover',function(e){
			var event=e.originalEvent;
			event.stopPropagation();
			event.preventDefault();
		}).on('dragleave',function(e){
			$(this).css('border',border);
			var event=e.originalEvent;
			event.stopPropagation();
			event.preventDefault();
		}).on('drop',function(e){
			$(this).css('border',border);
			var event=e.originalEvent;
			event.stopPropagation();
			event.preventDefault();

			var files=event.dataTransfer.files;
			var form=new FormData();
			for(var i in files){
				var reader=new FileReader();
				
				form.append('files',files[i]);
				
			}
			upload(uploadUrl,form);
			
		});
	}


})(jQuery)