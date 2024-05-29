 // Calc
 const urlParams = new URLSearchParams(window.location.search);
 let total_hours = urlParams.get('total_hours');
 
 var 
    days = total_hours / 24,
    months = 0,
    years = 0,
    remainingDays = days,
    resultElement = document.getElementById('Result')

// Years
while(remainingDays >= 365)
{
    years++
    remainingDays -= 365
}

// Months
while (remainingDays >= 30) {
    months++;
    remainingDays -= 30;
}
if(years==0)
    resultElement.innerHTML = `${Math.floor(months)} ماه و ${Math.floor(remainingDays)} روز`;
        else if(years==0 && months==0)
            resultElement.innerHTML = `${Math.floor(remainingDays)} روز`;
            else if(remainingDays==0)
                resultElement.innerHTML = `${Math.floor(years)} سال و ${Math.floor(months)} ماه`;
                else
                    resultElement.innerHTML = `${Math.floor(years)} سال و ${Math.floor(months)} ماه و ${Math.floor(remainingDays)} روز`;
        

            



 // Copy Link Button
 const copyButton = document.getElementById('copy-button');
 const urlTextField = document.getElementById('url-text-field');
 
 copyButton.addEventListener('click', () => {
 // Get the URL from the text field
 const urlToCopy = urlTextField.value;

 // Copy the URL to clipboard (using Clipboard API)
 navigator.clipboard.writeText(urlToCopy)
     .then(() => {
     // URL copied successfully
     alert("لینک در صفحه کلید شما ذخیره شد!");
     })
     .catch(err => {
     // Clipboard write failed
     console.error('لینک کپی نشد!:', err);
     alert("خطا در کپی کردن لینک");
     });
 });