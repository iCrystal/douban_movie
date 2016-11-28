var express = require('express'); //加载express模块
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 3000;  //设置端口号及环境变量
var app = express();  //启动express web服务器

app.set('views','./views/pages');//设置视图根目录
app.set('view engine','jade');  //设置默认模板引擎
// 表单数据格式化
app.use(bodyParser.urlencoded({extended:true}));
// 静态资源请求路径
app.use(express.static(path.join(__dirname,'/bower_components')));
// 监听
app.listen(port);
//打印日志
console.log('imooc start on port ' + port);


//编写路由
//index page
app.get('/',function(req,res) { //路由规则
	res.render('index',{
		title:'iMoive首页',
		movies: [{
			title: '机械战警',
			_id: 1,
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title: '机械战警',
			_id: 2,
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title: '机械战警',
			_id: 3,
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title: '机械战警',
			_id: 4,
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title: '机械战警',
			_id: 5,
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title: '机械战警',
			_id: 6,
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		}]
	});
});

//detail page
app.get('/movie/:id',function(req,res) {
	res.render('detail',{
		title:'iMoive详情页',
		movie: {
			doctor: '何塞帕迪里亚',
			country: '美国',
			title: '机械战警',
			year: 2014,
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			language: '英语',
			flash: 'http://palyer.youku.com/palyer.php/sid/XNjA1Njc0NTUy/v.swf',
			summary: '翻拍自1987年同名科幻经典、由《精英部队》导演何塞帕迪里亚执导的新版《机械战警》发布首款预告片。'
		}
	});
});

//admin page
app.get('/admin/movie',function(req,res) {
	res.render('admin',{
		title:'iMoive后台录入页',
		movie: {
			title: '',
			doctor: '',
			country: '',
			year: '',
			poster: '',
			flash: '',
			summary: '',
			language: ''
		}
	});
});

//list page
app.get('/admin/list',function(req,res) {
	res.render('list',{
		title:'iMoive列表页',
		movies: [{
			title: '机械战警',
			_id:1,
			doctor: '何塞帕迪里亚',
			country: '美国',
			year:2014,
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			language: '英语',
			flash: 'http://palyer.youku.com/palyer.php/sid/XNjA1Njc0NTUy/v.swf',
			summary: '翻拍自1987年同名科幻经典、由《精英部队》导演何塞帕迪里亚执导的新版《机械战警》发布首款预告片。'
		}]
	});
});
