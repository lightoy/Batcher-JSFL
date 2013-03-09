/**
 * ...
 * @for scaleform share sources files
 * @author www.loywong.com (2012-06)
 * 1.check the objects imported then set these URL link address(include bitmap textures and movie clip)
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