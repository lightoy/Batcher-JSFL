/**
 * ...
 * @for export source files for share
 * @author www.loywong.com (2012-06)
 *
 * 1.check the files of bitmap type
 * 2.set bitmap files' compression type to lossless,check allow smoothing
 * 3.export In first frame the basis class is BitmapData，and class name is the picture's name
 * 4.export for run time and the URL should be the fla file's name
 */
 
var currentFlashFiles = fl.documents;
var currentFlash=currentFlashFiles[0];
var currentFlashName=currentFlash.name;

fl.getDocumentDOM().getTimeline().currentFrame = 0;
fl.getDocumentDOM().selectAll();
if(fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements.length==0)
{
	confirm(" There are no pictures on the stage，import them first!");
}
else 
{
	for(var i=0;i<fl.getDocumentDOM().library.items.length;i++)
	{	
		if(fl.getDocumentDOM().library.items[i].itemType=='bitmap')
		{
			var item=fl.getDocumentDOM().library.items[i];
			
			item.linkageExportForAS=true;
			item.linkageExportInFirstFrame=true;
			item.linkageBaseClass="flash.display.BitmapData";
			var itemName = item.name;//itemArr
			var expName = itemName.split(".")[0];
			item.linkageClassName=expName;
			
			item.compressionType="lossless";
			item.allowSmoothing=true;
			
			item.linkageExportForRS=true;
			item.linkageURL=currentFlashName.split(".")[0]+".swf";
		}
	}
	//clear stage
	fl.getDocumentDOM().getTimeline().deleteLayer(0);
}

/**
 * ...
 * setting for exporting the movie clips just like the steps above
 */

var itemArr = [];
itemArr=fl.getDocumentDOM().library.items;
for(var j=0;j<fl.getDocumentDOM().library.items.length;j++)
{
	if(itemArr[j].itemType=='graphic')
	{
		//confirm(" graphic object' name:"+"name:"+itemArr[j].name);
	}
	
	if(itemArr[j].itemType=='movie clip')
	{
		var item_=itemArr[j];
		var expName_=itemArr[j].name;
		item_.linkageExportForAS=true;
		item_.linkageExportInFirstFrame=true;
		item_.linkageClassName=expName_;
		item_.linkageBaseClass='flash.display.MovieClip';
		
		item_.scalingGrid = true;
		item_.scalingGridRect = {left:-20, top:-20, right:20, bottom:20};
			
		item_.linkageExportForRS=true;
		item_.linkageURL=currentFlashName.split(".")[0]+".swf";
	}
}
