function SeachAll(opt){
	var obj={};
		$.extend(true, obj, opt);
	var title='';
	switch(obj.type){
		case 0:
			title='搜索城市'
		break;
		case 1:
			title='品牌名称'
		break;
	}
	console.log(title);
}