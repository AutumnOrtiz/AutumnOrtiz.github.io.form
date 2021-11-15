function validation()
    {
        var firstname=document.registration.fname;
        var lastname=document.registration.lname;
        var number=document.registration.number;
        var gname=document.registration.gname;

        if(Validatefirstname(firstname))
        {
            if(Validatelastname(lname))
            {
                if(genderselect(gname))
                {
                    if(phonenumber(number))
                    {
                    }
                }
            }
        }
        return false;  
    }

function Validatefirstname(firstname)
    {
        var letters = /^[A-Za-z]+$/;
        if (firstname.value.length=0)
        {
            alert('Please enter the first name');
            firstname.focus();
            return false;
        }
        else if(firstname.value.match(letters))
        {
            return true;
        }
        else
        {
            alert('First name must only have letters of the alphabet only');
            firstname.focus();
            return false;
        }
    }



function Validatelastname(lname)
{
    var letters= /^[A-Za-z]+$/;
    if(lname.value.length=0)
    {
        alert('Please enter last name');
        lname.focus();
        return false;
    }
    else if(lname.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('last name must have alphabet characters only');
        lname.focus();
        return false;
    }
}

function genderselect(gname)
{
	if(gname.value == "Default")
	{
		alert('Select your gender');
		gname.focus();
		return false;
	}
	else
	{
		return true;
	}
}

function phonenumber(number)
{ 
	var numbers = /^[0-9]+$/;
	if(number.value.length==0 )
	{
		alert('Please enter contact number');
		fname.focus();
		return false;
	}
	else if(number.value.length<10)
	{
		alert('Please enter a valid contact number');
		lname.focus();
		return false;

	}
	else if(number.value.match(numbers))
	{
		alert('Form Succesfully Submitted');
		window.location.reload();
		return true;
	}
	else
	{
		alert('Please check your contact number');
		return false;
	}
}