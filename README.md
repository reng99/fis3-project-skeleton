## fis3项目

> Q: 如何实现热加载

fis3 release -cwL


> Q: fis3执行release后，开启server，但是浏览器打开的是以前写的项目，不是当前项目

```bash
1. 删除之前的项目
fis3 server clean

2. 重新发布
fis3 release


# 更加直观的操作
1. 打开WWW目录
fis3 server open

2. 手动删除该目录下的所有文件

3. 重新发布
fis3 release
```

### 使用方法

```bash
# 生产环境/本地调试(fis3 server open本地www下运行项目)
1. 开启服务
	npm run server
2. 进入生产环境
	npm run dev
3. 访问路径
	http://localhost:8080/views/

# 生产环境
1. npm run prod
```

### 相关资源 

[fis3](http://fis.baidu.com/)

[swiper](https://github.com/nolimits4web/swiper)

[jquery](https://github.com/jquery/jquery)