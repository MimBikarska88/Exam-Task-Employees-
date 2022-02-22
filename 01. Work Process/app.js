function solve() {
    let inputFName = document.querySelector('#fname');
    let inputLname = document.querySelector('#lname');
    let inputEmail = document.querySelector('#email');
    let inputBirth = document.querySelector('#birth');
    let inputPos = document.querySelector('#position');
    let inputSalary = document.querySelector('#salary');

    let tbody = document.querySelector('#tbody');
    let sum = document.querySelector('#sum');


    let hireButton = document.querySelector('#add-worker');

    function createCellData(text) {
        let tdElement = document.createElement('td');
        tdElement.innerHTML = text;
        return tdElement;
    }
    let editEmployee = (event) => {

        let tr = event.target.parentElement.parentElement;
        let tdata = Array.from(tr.querySelectorAll('td'));
        tr.remove();

        inputFName.value = tdata[0].innerHTML;
        inputLname.value = tdata[1].innerHTML;
        inputEmail.value = tdata[2].innerHTML;
        inputBirth.value = tdata[3].innerHTML;
        inputPos.value = tdata[4].innerHTML;
        inputSalary.value = tdata[5].innerHTML;

        let currentSum = Number(sum.innerHTML);
        sum.innerHTML = `${(currentSum - Number(tdata[5].innerHTML)).toFixed(2)}`

    }
    let fireEmployee = (event) => {
        let tr = event.target.parentElement.parentElement;
        let salaryData = Number(tr.querySelector(':nth-child(6)').innerHTML);
        tr.remove();
        let currentSum = Number(sum.innerHTML);
        sum.innerHTML = `${(currentSum - salaryData).toFixed(2)}`;
    }
    let hireEmployee = (event) => {
        event.preventDefault();

        let fname = inputFName.value;
        inputFName.value = '';
        let lname = inputLname.value;
        inputLname.value = '';
        let email = inputEmail.value;
        inputEmail.value = '';
        let birth = inputBirth.value;
        inputBirth.value = '';
        let pos = inputPos.value;
        inputPos.value = '';
        let salary = inputSalary.value;
        inputSalary.value = '';

        if (fname.trim() == '' || lname.trim() == '' || email.trim() == '' || birth.trim() == '' || pos.trim() == '' || salary.trim() == '') {
            return;
        }
        let tr = document.createElement('tr');
        tr.appendChild(createCellData(fname));
        tr.appendChild(createCellData(lname));
        tr.appendChild(createCellData(email));
        tr.appendChild(createCellData(birth));
        tr.appendChild(createCellData(pos));
        tr.appendChild(createCellData(salary));

        let buttonFired = document.createElement('button');
        buttonFired.classList.add('fired');
        buttonFired.addEventListener('click', fireEmployee);
        buttonFired.innerText = 'Fired';
        let buttonEdit = document.createElement('button');
        buttonEdit.classList.add('edit');
        buttonEdit.addEventListener('click', editEmployee);
        buttonEdit.innerText = 'Edit';

        let td = document.createElement('td');
        td.appendChild(buttonFired);
        td.appendChild(buttonEdit);
        tr.appendChild(td);
        console.log(td);

        tbody.appendChild(tr);

        let currentSum = Number(sum.textContent);
        sum.textContent = `${(currentSum + Number(salary)).toFixed(2)}`;


    }
    hireButton.addEventListener('click', hireEmployee);

}
solve()