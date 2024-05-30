# تبدیل تایم پلی دوتا ۲
برای اینکه بفهمید چند روز و چند ماه و چند سال از زندگی‌تون رو پشت کامپیوتر بودین و توی دوتا داشتین فشار می‌خوردین :) 
> [!TIP]
> Live preview: https://bettercallus.github.io/Dota2-playtime/templates
## **عناوین این صفحه**
- [چطوری بفهمم چقدر دوتا ۲ بازی کردم؟](https://bettercallus.github.io/Dota2-playtime/templates/how-to-find-dota2-playtime.html) 
- [چطوری دوتا ۲ رو حذف بکنم ؟ ](https://bettercallus.github.io/Dota2-playtime/templates/how-to-uninstall-dota-2.html)
- چطوری کار می‌کنه؟ 
- آپدیت های بعدی چیا می‌خوایم اضافه کنیم؟ 
- چطوری شما میتونید چیزی اضافه بکنید؟ 
## نسخه فعلی 
![image](https://github.com/BetterCallUS/Dota2-playtime/blob/main/public/images/preview/Phone%204%201.png)
![image](https://github.com/BetterCallUS/Dota2-playtime/blob/main/public/images/preview/Phone%204%201.png)
## نسخه بعدی 
![image](https://github.com/BetterCallUS/Dota2-playtime/blob/main/public/images/preview/v2-eng-desktop-1-1.jpg)
![image](https://github.com/BetterCallUS/Dota2-playtime/blob/main/public/images/preview/v2-eng-desktop-1.jpg)
![image](https://github.com/BetterCallUS/Dota2-playtime/blob/main/public/images/preview/v2-eng-mobile-1.jpg)
![image](https://github.com/BetterCallUS/Dota2-playtime/blob/main/public/images/preview/v2-eng-mobile-2.jpg)
## چطوری کار میکنه؟ 
یه فرمول خیلی ساده داره ساعت رو میگیره و تبدیلش میکنه.
0. قبل شروع باید مقدار ساعت بازی شده رو از صفحه اول بگیرید و بریزید توی $total_hours راه های زیادی هست ولی من از javascript و متد Get استفاده کردم چون هست شده بود روی گیت هاب نمی‌شد با متد پست این کارو کرد.
```javascript
// Submit Button
const form = document.getElementById('submitData');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const defaultURL = window.location.href // Get Current Page URL Location
    const total_hours = document.getElementById('playtime_number').value; // Playtime Field Value
    const url = new URL('./result.html', defaultURL); // Append Next Page URL
    url.searchParams.append('total_hours', total_hours); // Add total_hours to your URL parametrs. Only uses in get method

    window.location.href = url.toString();
});
```
1. اول باید به روز تبدیل بکنید داده ورودی تا بتونید سال و ماه رو به دست بیارید، پس عدد ورودی رو تقسیم بر ۲۴ کنید که تعداد ساعاتیه که ما در طی یک روز داریم.
```javascript
const day = total_hours / 24
```
2. بعدش برای تبدیل اون روزا به ماه تقسیم بر ۱۲ شون باید بکنی
```javascript
const month = day / 12
``` 
3. و اگر هم میخوای سالش رو به دست بیاری میتونی هم تعداد ماه رو تقسیم به ۱۲ بکنی یا تعداد روز ها رو تقسیم به ۳۶۵
> [!IMPORTANT]
> پیشنهاد می‌کنم که روز رو تقسیم بر 365 بکنید چون ممکنه تعداد ساعتایی که بازی کرده# تبدیل تایم پلی دوتا ۲
برای اینکه بفهمید چند روز و چند ماه و چند سال از زندگی‌تون رو پشت کامپیوتر بودین و توی دوتا داشتین فشار می‌خوردین :) 
> [!TIP]
> Live preview: https://bettercallus.github.io/Dota2-playtime/templates
## **دسترسی سریع**
- [چطوری بفهمم چقدر دوتا ۲ بازی کردم؟](https://bettercallus.github.io/Dota2-playtime/templates/how-to-find-dota2-playtime.html) 
- [چطوری دوتا ۲ رو حذف بکنم ؟ ](https://bettercallus.github.io/Dota2-playtime/templates/how-to-uninstall-dota-2.html)
- چطوری کار می‌کنه؟ 
- آپدیت های بعدی چیا می‌خوایم اضافه کنیم؟ 
- چطوری شما میتونید چیزی اضافه بکنید؟ 

![image](https://github.com/wayofmani/Dota2playTime/blob/main/public/images/preview/Phone%201.jpg)
![image](https://github.com/wayofmani/Dota2playTime/blob/main/public/images/preview/Phone%202.jpg)
![image](https://github.com/wayofmani/Dota2playTime/blob/main/public/images/preview/Desktop%201.jpg)
![image](https://github.com/wayofmani/Dota2playTime/blob/main/public/images/preview/Desktop%202.jpg)
## چطوری کار میکنه؟ 
یه فرمول خیلی ساده داره ساعت رو میگیره و تبدیلش میکنه.
0. قبل شروع باید مقدار ساعت بازی شده رو از صفحه اول بگیرید و بریزید توی $total_hours 
```javascript
var total_hours = 'فعلا نمیدونم'
```
1. اول باید به روز تبدیل بکنید داده ورودی تا بتونید سال و ماه رو به دست بیارید، پس عدد ورودی رو تقسیم بر ۲۴ کنید که تعداد ساعاتیه که ما در طی یک روز داریم.
```javascript
const day = total_hours / 24
```
2. بعدش برای تبدیل اون روزا به ماه تقسیم بر ۱۲ شون باید بکنی
```javascript
const month = day / 12
``` 
3. و اگر هم میخوای سالش رو به دست بیاری میتونی هم تعداد ماه رو تقسیم به ۱۲ بکنی یا تعداد روز ها رو تقسیم به ۳۶۵
> [!IMPORTANT]
> پیشنهاد می‌کنم که روز رو تقسیم بر 365 بکنید چون ممکنه تعداد ساعتایی که بازی کرده به ماه نرسه مقدار ماه ۰ باشه براتون، در کل چیزی که همیشه مقدارشو داریم روز هستش.

```javascript
const year = day / 365
``` 
4. و در ادامه دیتا ها رو از طریق متود GET از صفحه اول دریافت باید بکنیم و توی HTML قرارشون بدیم.
5. اینطوری دیتا رو میگیریم
6. اینطوری نتیجه رو نمایش میدیم 

### چه ایده هایی برای باحال تر کردنش در آینده داریم؟ 
- الان که تو سرمونه یه کاریش بکنیم که همه ادمایی که ثبت میکنن یه جا لیست بشن و بگن که کی بهشون معرفی کرده بازی رو :) روی گیت نمیشه این کارو کرد باید بزاریم روی سایت خودمون. فعلا برای تست روی گیت هاب هاستش کردیم.
- احتمال زیاد نسخه انگلیسی هم بسازیم بزاریم ردیت دوتا ۲ :) 
 
### چطوری چیزی اضافه می‌تونید بکنید یا پیشنهاد بدید؟ 
برای پیشنهاد ها که می‌تونید بیاید به من پیام بدید هرجا که راحتید ایدیم @wayofmani هست همه جا ایمیلمم maniicontact@gmail.com 
اما برای اضافه کردن چیزی به این (برنامه میشه گفت بهش اصلا؟) باید یه فورک اول ازش بگیرید بعد تغییراتتونو بدید و پول ریکوئست بزنید بعدا سعی میکنم یه لینک آموزشی ازش پیدا کنم بزارم اینجا . ولی حتی اگه کدم نمی‌خواید بزنید باز می‌تونید برای خودم اگه ایده ای دارید بفرستید.

An application to calculate your Dota2 playtime in months and years.
 به ماه نرسه مقدار ماه ۰ باشه براتون، در کل چیزی که همیشه مقدارشو داریم روز هستش.

```javascript
const year = day / 365
``` 
4. و در ادامه دیتا ها رو از طریق متود GET از صفحه اول دریافت باید بکنیم و توی HTML قرارشون بدیم.
5. اینطوری دیتا رو میگیریم
6. اینطوری نتیجه رو نمایش میدیم 

### چه ایده هایی برای باحال تر کردنش در آینده داریم؟ 
- الان که تو سرمونه یه کاریش بکنیم که همه ادمایی که ثبت میکنن یه جا لیست بشن و بگن که کی بهشون معرفی کرده بازی رو :) روی گیت نمیشه این کارو کرد باید بزاریم روی سایت خودمون. فعلا برای تست روی گیت هاب هاستش کردیم.
- احتمال زیاد نسخه انگلیسی هم بسازیم بزاریم ردیت دوتا ۲ :) 
 
### چطوری چیزی اضافه می‌تونید بکنید یا پیشنهاد بدید؟ 
برای پیشنهاد ها که می‌تونید بیاید به من پیام بدید هرجا که راحتید ایدیم @wayofmani هست همه جا ایمیلمم maniicontact@gmail.com 
اما برای اضافه کردن چیزی به این (برنامه میشه گفت بهش اصلا؟) باید یه فورک اول ازش بگیرید بعد تغییراتتونو بدید و پول ریکوئست بزنید بعدا سعی میکنم یه لینک آموزشی ازش پیدا کنم بزارم اینجا . ولی حتی اگه کدم نمی‌خواید بزنید باز می‌تونید برای خودم اگه ایده ای دارید بفرستید.

An application to calculate your Dota2 playtime in months and years.
