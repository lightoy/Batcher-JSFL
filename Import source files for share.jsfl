/**
 * ...
 * @for import source files for share
 * @author www.loywong.com
 *
 * 1.Set your URL link to the ones imported in library(include bitmap textures and movie clip)
 */

var itemArr = [];
itemArr=fl.getDocumentDOM().library.items;
	
for(var i=0;i<itemArr.length;i++)
{	
	if(itemArr[i].itemType=='bitmap'||itemArr[i].itemType=='movie clip')
	{
		var item=fl.getDocumentDOM().library.items[i];
		
		if(item.linkageImportForRS==true)
		{
			item.linkageURL="/your swf file's name/.swf";
		}	
	}
		
	if(itemArr[i].itemType=='graphic')
	{
		//
	}
}