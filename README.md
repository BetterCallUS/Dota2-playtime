# تبدیل تایم پلی دوتا ۲
برای اینکه بفهمید چند روز و چند ماه و چند سال از زندگی‌تون رو پشت کامپیوتر بودین و توی دوتا داشتین فشار می‌خوردین :) 
> [!IMPORTANT]
> 🌐 Preview https://bettercallus.github.io/Dota2-playtime/templates
# در ادامه...
## Our Team Members
|عنوان  | لینک |
|------------- | ------------- | 
| چطوری بفهمم چقدر دوتا بازی کردم؟  |  [Link](https://bettercallus.github.io/Dota2-playtime/templates/how-to-find-dota2-playtime.html) |
| چطوری دوتتا ۲ رو پاک بکنم؟  |  [Link](https://bettercallus.github.io/Dota2-playtime/templates/how-to-find-dota2-playtime.html) |
| چطوری کار می‌کنه؟ | پایین تر توضیح دادیم |
| آپدیت های بعدی چیا می‌خوایم اضافه کنیم؟ | پایین تر توضیح دادیم |
| چطوری چیزی اضافه بکنیم؟  | پایین تر توضیح دادیم |
| پیش نمایش از صفحات و نسخه بعدی | پایین تر عکس گداشتیم |


# چطوری کار میکنه؟ 
یه فرمول خیلی ساده داره ساعت رو میگیره و تبدیلش میکنه.


1. قبل شروع باید مقدار ساعت بازی شده رو از صفحه اول بگیرید و بریزید توی $total_hours راه های زیادی هست ولی من از javascript و متد Get استفاده کردم چون هست شده بود روی گیت هاب نمی‌شد با متد پست این کارو کرد. 
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

2. یه فایل جدید بسازید یا توی صفحه دوم اسکریپتشو بنویسید. باید مقدار های ورودی رو از صفحه قبلی دریافت بکنید که روش های زیادی داره ولی من این کارو کردم. 
```javascript
 const urlParams = new URLSearchParams(window.location.search);
 let total_hours = urlParams.get('total_hours'); // Get your Input Value
```

3. بعدش این متغییر ها رو تعریف باید بکنید.
   1.بیاید محاسبه رو ساده تر بکنیم، اول مقدار ساعت رو تبدیلش میکنیم به روز که ساده تر بشه محاسبات.
   2.ماه و سال رو ۰ قرار می‌دیم و یه متغییر به اسم reaminingDays تعریف میکنیم و برابر با days میزاریمش. حالا راه های زیادی هست برای حساب کردنش ولی من اینطوری رفتم جلو که اول سال رو بدست بیارم بعد ماه رو بعد روز خودش به دست میاد و تقریبا درست ترین روشه.
```javascript
 var 
    days = total_hours / 24, // Convert Total Hours to Days
    months = 0, 
    years = 0,
    remainingDays = days,
    resultElement = document.getElementById('Result') // The place you want to show your text It's a H1 tag in my code
```

4.به دست اوردن سال اینطوریه که از یه حلقه While استفاده می‌کنم و میگم تعداد روز ها (که همون ساعت ها بودن که تبدیل به روز شدن) اگه بیشتر یا مساوی بود با 365 این حلقه رو ادامه بده و هر بار که ادامه میدی یدونه به مقدار متغیر years که ۰ بود اضافه کن و ۳۶۵ تا از remainingDays کم بکن. 
```javascript
// Years
while(remainingDays >= 365)
{
    years++
    remainingDays -= 365
}
```

5. برای به دست آوردن ماه هم همون روش بالاس ولی اینبار به ماه اضافه می‌کنه و هر بار که تعداد روز های باقی مونده reaminingDays بیشتر از ۳۰ بود به months یدونه اضافه میکنه و ۳۰ تا از reamingDays کم می‌کنه.
```javascript
// Months
while (remainingDays >= 30) {
    months++;
    remainingDays -= 30;
}
```

6. روز هم خودش به دست اومده الان. اینقدر از روز کم کردیم که الان دیگه خودش به دست اومده و توی reamingDays می‌تونید تعداد روز هایی که بازی کرده رو داشته باشیم (روز هایی که از ماه و سالش باقی مونده و بیشتر از ۳۰ هم نمیشه.)
7. برای نمایشش توی HTML هم باز راه زیاد دارید ولی من اینطوری رفتم جلو و چندتا نکته داره مثلا وقتی سال ۰ هست نباید بگه ۰ کلا نباید نشونش بده و اگه ماه ۰ هست فقط باید روز و سال رو نشون بده. که تمیز تر باشه همین. و البته از Math.Floor هم استفاده کردم که اعشار رو پاک بکنم.
```javascript
if(years==0) // only month and days
    resultElement.innerHTML = `${Math.floor(months)} ماه و ${Math.floor(remainingDays)} روز`;
        else if(years==0 && months==0) // only days
            resultElement.innerHTML = `${Math.floor(remainingDays)} روز`;
            else if(remainingDays==0) // no days
                resultElement.innerHTML = `${Math.floor(years)} سال و ${Math.floor(months)} ماه`;
                else // general form: year month and day
                    resultElement.innerHTML = `${Math.floor(years)} سال و ${Math.floor(months)} ماه و ${Math.floor(remainingDays)} روز`;
```

8. همین و تمام دمتون گرم یه ستاره بدید دلمون خوش بشه :)

.

### چه ایده هایی برای باحال تر کردنش در آینده داریم؟ 
- الان که تو سرمونه یه کاریش بکنیم که همه ادمایی که ثبت میکنن یه جا لیست بشن و بگن که کی بهشون معرفی کرده بازی رو :) روی گیت نمیشه این کارو کرد باید بزاریم روی سایت خودمون. فعلا برای تست روی گیت هاب هاستش کردیم.
- احتمال زیاد نسخه انگلیسی هم بسازیم بزاریم ردیت دوتا ۲ :) 
 
### چطوری چیزی اضافه می‌تونید بکنید یا پیشنهاد بدید؟ 
برای پیشنهاد ها که می‌تونید بیاید به من پیام بدید هرجا که راحتید ایدیم @wayofmani هست همه جا ایمیلمم maniicontact@gmail.com 
اما برای اضافه کردن چیزی به این (برنامه میشه گفت بهش اصلا؟) باید یه فورک اول ازش بگیرید بعد تغییراتتونو بدید و پول ریکوئست بزنید بعدا سعی میکنم یه لینک آموزشی ازش پیدا کنم بزارم اینجا . ولی حتی اگه کدم نمی‌خواید بزنید باز می‌تونید برای خودم اگه ایده ای دارید بفرستید.
آموزش فورک و کانتریبیوت کردم تو گیت هاب : 
- https://gist.github.com/MarcDiethelm/7303312
- https://www.youtube.com/watch?v=yr6IzOGoMsQ
- https://www.youtube.com/watch?v=a_FLqX3vGR4


## نسخه فعلی 
![image](https://github.com/BetterCallUS/Dota2-playtime/blob/main/public/images/preview/Phone%204%201.png)
![image](https://github.com/BetterCallUS/Dota2-playtime/blob/main/public/images/preview/Phone%203%201.png)
## نسخه بعدی 

![image](https://github.com/BetterCallUS/Dota2-playtime/blob/main/public/images/preview/v2-eng-mobile-1.jpg)
![image](https://github.com/BetterCallUS/Dota2-playtime/blob/main/public/images/preview/v2-eng-mobile-2.jpg)
![image](https://github.com/BetterCallUS/Dota2-playtime/blob/main/public/images/preview/v2-eng-desktop-1-1.jpg)
![image](https://github.com/BetterCallUS/Dota2-playtime/blob/main/public/images/preview/v2-eng-desktop-1.jpg)
