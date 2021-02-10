window.onload = () => {
    fetch('https://serverless.carlosalvarez.vercel.app/api/meals')
    // Convirtiendo el arreglo a JSON
    .then(response => response.json())
    // Mostrando la data 
    .then(data => {
        const mealsList = document.getElementById('meals-list')
        const submit = document.getElementById('submit')
        const template = data.map(x => '<li>' + x.name + '</li>').join('')
        mealsList.innerHTML = template
        submit.removeAttribute('disabled')
    })
}