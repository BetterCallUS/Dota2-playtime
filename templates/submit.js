const form = document.getElementById('submitData');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const defaultURL = window.location.href
    const total_hours = document.getElementById('playtime_number').value;
    const url = new URL('./result.html', defaultURL);
    url.searchParams.append('total_hours', total_hours);

    window.location.href = url.toString();
});