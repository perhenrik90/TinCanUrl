/***************************************************************************************************
 * Tin Can url tool. 
 * Generates a url to a tin can resource for one person connected to a learning record store
 * 
 * Tested with Articulate Storyline generated content and Learning Locker LRS.
 * Only for testing purpouse. 
 * 
 * @author Per-Henrik E Kvalnes 2015
 ***************************************************************************************************/

// ress_adress = resource adress (include http or https)
// lrs_adress = url to the Learning Record Store
// lrs_username = the lrs username
// lrs_pwd = the lrs password
// useremail = the course takers email
// name = full name of the course taker


// generates an unique url for one course taker
function generateTinCanURL(ress_adress, lrs_adress, lrs_username, lrs_pwd, useremail, name)
{
    var ress_adress = document.getElementById("ress_adress").value;
    var lrs_adress = document.getElementById("lrs_adress").value;

    var lrs_username = document.getElementById("lrs_username").value;
    var lrs_pwd = document.getElementById("lrs_pwd").value;
    var lrs_hash = window.btoa(lrs_username+":"+lrs_pwd);
    
    var useremail = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var actor = {"mbox":"mailto:"+useremail, "name":name}


    // build the base of the url 
    url = ress_adress

    url += "?";
    url += "endpoint="+ encodeURIComponent(lrs_adress);
    url += "&auth="+ encodeURIComponent("Basic "+lrs_hash);
    url += "&actor="+ encodeURIComponent(JSON.stringify(actor));
    url += "&activity_id="+ encodeURIComponent("www.example.com/completed");
    url += "&ampregistration="+encodeURIComponent("2981c910-6445-11e4-9803-0800200c9a66");

    return url
}

