#攻刘网400错误已修复
错误原因：添加了封IP的JavaScript 代码导致

```javascript
function auth(doc){
 var laiyuan = doc.referrer;
 	var isAuth = "0";
 	if(isAuth==0){// not auth
 		if(laiyuan!=null && laiyuan!=''){
 			var lai01 = laiyuan.substr(0,16);//http://127.0.0.1
 			var lai02 = laiyuan.substr(0,19);//http://172.20.0.205
 			var lai03 = laiyuan.substr(0,28);//http://www.panshao.com/myweb
 			if(lai01 !='http://127.0.0.1' && lai02 !='http://172.20.0.205' 
 					&& lai03 !='http://www.panshao.com/myweb') {//no right 
 				return 0;
 			}else{// has right
 				return 1;
 			}
 		}else{
 			return 0;
 		}
 	}
 }

 var laiyuan1 = document.referrer;
 var flag = auth(document);
 if(flag==0){
 	window.location.href='<%=root %>'+"/fail.jsp";
 }

```
此代码已删除

另外，友链已关闭

## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/Zaq14rfv/Zaq14rfv/edit/main/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/Zaq14rfv/Zaq14rfv/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
