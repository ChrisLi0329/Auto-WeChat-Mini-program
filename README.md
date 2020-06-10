# Auto-WeChat-Mini-program

# What is the Thunder Auto 
This is a car selling and buying platform.

# How to use this mini-program

### As a user:
1. You can view the transfer leasing car in "我要买车". And you can click the section the get detail information.
2. You can type in the car information you want to transfer or sell in “我要卖车”. When you submitted, the information will post to the "我要买车".
3. The platform also provides the deals for different brand of new cars in "新车优惠". There is the detailed information when you click the specific car you want. User can contact the customer service through WeChat directly. 
4. The feature "我要租车" provides the deals about the car renting. User can contact the customer service about the further detailed information using "联系客服" green button which in the bottom of the page.
5. Last section is "联系客服" in the home page. There is a QR code when you click the botton. User can scan the QR code to add our agents to do the further communication.

### As a admin:
1. All 5 features will show on the admin side. There is a difference place between admin side and user side. In the car detail page, the user will see the two buttons in the bottom which are "分享好友" and "联系客服" and the admin will see "删除信息" in the bottom. Admin can easily to delete car information using mini-program instead of going back to database to delete.
2. Admin has two more features which are "新车输入"（type new car information） and “租车输入"(type rent car information). Those are really convient to type the car information into the database on the mini-program side.
3. WeChat mini-program has to link the WeChat offical Account. And WeChat offical account owner should set up the customer service feature in WeChat offical account platform in order to the user can contact the customer service in car detail page using "联系客服" green button(this is the API WeChat provided). 

## Code explaination
- Under images folder, there are all the images used for the UI/UX design.
- Under page folder, there are 11 different pages in the mini-program.
	- Under each specific page folder, there are wxml, wxss, js, and json files. 
- Because I use WeChat Cloud develop, there are couple default files in the repo.

## Demo
<table>
	<tr>
		<td><img src="/thunder1.jpg" width="100%"> 
		<td><img src="/thunder2.jpg" width="100%">
		<td><img src="/thunder3.jpeg" width="100%">
		<td><img src="/thunder4.jpeg" width="100%">
	</tr>
	<tr>
		<td><img src="/thunder5.png" width="100%">
		<td><img src="/thunder6.jpeg" width="100%">
		<td><img src="/thunder7.jpeg" width="100%">
	</tr>
</table>

