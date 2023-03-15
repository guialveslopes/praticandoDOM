function adicionar() {
    const adicionar = document.querySelector('#adicionar')

    const p = document.createElement('p')
    const input = document.querySelector('#digite')
    p.innerText = input.value
    adicionar.appendChild(p)

    document.getElementById('digite').value = '';
}