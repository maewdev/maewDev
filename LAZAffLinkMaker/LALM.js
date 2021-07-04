(function () {
    {{myAffRootLink}}
    const version = "LAZ Aff link Maker version 2.0";

    if ((window.location.hostname.search('lazada.co.th') < 0)) {
        alert('LAZ Aff link Maker ใช้ได้กับเว็บ lazada.co.th เท่านั้น !!😎');
        return;
    }
    if (myAffRootLink === "") {
        alert('กรุณาใส่ค่า myAffRootLink ก่อน 😎');
        return;
    }

    function getParameterByName(name) {
        const loc = window.location.search;
        let match = RegExp('[?&]' + name + '=([^&]*)').exec(loc);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }

    function getToday() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear() + 543;
        return (dd + mm + yyyy);
    }

    function getPageInfo() {
        let keyword = getParameterByName('keyword');
        let keyword1 = ((keyword == null) ? "" : "&keyword=" + encodeURIComponent(keyword));
        let searchPrefill = getParameterByName('searchPrefill');
        let searchPrefill1 = ((searchPrefill == null) ? "" : "&searchPrefill=" + searchPrefill);
        let q = getParameterByName('q');
        let q1 = ((q == null) ? "" : "&q=" + encodeURIComponent(q));
        let service = getParameterByName('service');
        let service1 = ((service == null) ? "" : "&service=" + service);
        let location = getParameterByName('location');
        let location1 = ((location == null) ? "" : "&location=" + location);
        let price = getParameterByName('price');
        let price1 = ((price == null) ? "" : "&price=" + price);
        let rating = getParameterByName('rating');
        let rating1 = ((rating == null) ? "" : "&rating=" + rating);
        let ppath = getParameterByName('ppath');
        let ppath1 = ((ppath == null) ? "" : "&ppath=" + ppath);
        let sort = getParameterByName('sort');
        let sort1 = ((sort == null) ? "" : "&sort=" + sort);
        let style = getParameterByName('style');
        let style1 = ((style == null) ? "" : "&style=" + style);
        let page = getParameterByName('page');
        let page1 = ((page == null) ? "" : "&page=" + page);
        let path = getParameterByName('path');
        let path1 = ((path == null) ? "" : "&path=" + path);
        let tab = getParameterByName('tab');
        let tab1 = ((tab == null) ? "" : "&tab=" + tab);
        let from = getParameterByName('from');
        let from1 = ((from == null) ? "" : "&from=" + from);
        let pageTypeId = getParameterByName('pageTypeId');
        let pageTypeId1 = ((pageTypeId == null) ? "" : "&pageTypeId=" + pageTypeId);
        let loc = window.location.href.split("?");
        let all_query = from1 + q1 + keyword1 + searchPrefill1 + service1 + location1 + price1 + ppath1 + rating1 + sort1 + style1 + page1 + path1 + tab1 + pageTypeId1;
        let loc1 = loc[0] + (all_query == "" ? "" : "?" + all_query);
        return (loc1);
    }

    function makeModal() {
        let loc1 = getPageInfo();
        var affurl = myAffRootLink + "?url=" + encodeURIComponent(loc1);

        let picLZD = document.getElementsByClassName("pdp-mod-common-image item-gallery__thumbnail-image");
        if (picLZD.length === 0) {
            var pix = ""
        } else {
            pix = "<div class='img_container'><span style='color:white;margin-bottom:2px;'>🖼️ Images:</span>";
            pix += "<div class='img_wrap'>";
            for (let i = 0; i < picLZD.length; i += 1) {
                let url1 = picLZD[i].src;
                let url0 = url1.substring(0, url1.lastIndexOf("/") + 1);
                let b = url1.split('/').pop();
                let p = b.substr(0, b.indexOf(".") + 4);

                let pv01 = url0 + p;

                let th_pv01;
                if (pv01.length < url1.length) {
                    th_pv01 = pv01 + "_70x70q80";
                    pv01 += '_800x800q80';
                }
                else th_pv01 = pv01;

                pix = pix + "<div class='item'><a href='" + pv01 + "' target='_blank' rel='nofollow' title='Click for large image'><img src='" + th_pv01 + "' width='70' border='0'/></a><input type='hidden' id='itemTxt" + i + "' value='" + pv01 + "' />  <input type='button' id='buttonCopy" + i + "' class='button b_img' title='copy image url' value=' Copy  '/>  &nbsp;</div>";
            }
            pix = pix + "</div></div>";
        }

        let the_title = document.getElementsByTagName("title")[0].innerHTML.split("|")[0].trim();
        let title = "<div class='w3-container w3-cell-row'> <span style='color:white' class='w3-cell' >Title=</span> <input class='w3-input w3-border w3-cell' type='text' style='height:20px; ' name='the_title' id='itemTxt_title' value='" + the_title + "' /> <span class='w3-cell'> <input type='button' id='buttonCopy_title' class='button' value=' Copy  ' /> </span></div>";

        let sub_aff_id = "<div class='w3-cell-row'> <span style='color:white' class='w3-cell'>sub_aff_id=</span> <input class='w3-input w3-border w3-cell' type='text' style='height:20px;width:90%;'  name='sub_aff_id' id='sub_aff_id' value='' /> ";
        let sub_id1 = "<span style='color:white' class='w3-cell'>sub_id1=</span>   <input class='w3-input w3-border w3-cell' type='text' style='height:20px;width:90%;'  name='sub_id1' id='sub_id1' value='" + getToday() + "'  /> </div>";

        let afflink = "<span style='color:white'>🎯 Your Afﬁliate Link:</span><br><textarea rows='4' cols='65' name='afflink' id='text_afflink' disabled style='background-color:white;'>" + affurl + "</textarea> <input type='button' id='b_afflink' class='button' value=' Copy  '/> ";

        let html = '';

        html += '<div id="LZModal" class="w3-modal"><div class="w3-modal-content w3-animate-top w3-card-4"><div style="width:100%;"><img src="https://i.imgur.com/yxhBPE3.png" title="' + version + '" class="head_logo"><span class="close_modal" id="close"> </span></div>';
        html += '<div class="w3-container">' + pix + '</div>';
        html += '<div class="w3-container"> <div class="link_wrap">' + title + sub_aff_id + sub_id1 + afflink + '</div></div>';
        html += '<footer class="w3-container w3-indigo foot">' + version + '  ©️ by Mr.Sommanat <a class="foot" href="https://maewdev.netlify.app/lazafflinkmaker/" target="_new"> "maewDev"</a> 😎</footer></div></div>'; 
       

        let fragmentFromString = (strHTML) => {
            let r = document.createRange().createContextualFragment(strHTML);
            return r;
        };
        let fragment = fragmentFromString(html);
        document.body.appendChild(fragment);
    }

    function makeScript() {
        let modal = document.getElementById("LZModal");
        let newScript = document.createElement("script");
        let inlineScript = document.createTextNode('function loadStyle(cssURL) {return new Promise(function(resolve, reject) {let link = document.createElement("link");link.type = "text/css";link.rel = "stylesheet";link.href = cssURL;link.onload = function() {resolve();};let headScript = document.querySelector("script");headScript.parentNode.insertBefore(link, headScript);});}loadStyle("https://cdnjs.cloudflare.com/ajax/libs/w3-css/4.1.0/w3.css");loadStyle("https://maewdev.netlify.app/LAZAffLinkMaker/style.css");var sub_aff_id_input = document.getElementById("sub_aff_id");var sub_id1_input = document.getElementById("sub_id1");var affLink_txt = document.getElementById("text_afflink");var afflink_html = affLink_txt.innerHTML;updateAfflink();function updateAfflink() {let sub_aff_id_value = sub_aff_id_input.value.trim().split(" ").join("_");sub_aff_id_value = sub_aff_id_value == "" ? "" : "&sub_aff_id=" + sub_aff_id_value;let sub_id1_value = sub_id1_input.value.trim().split(" ").join("_");sub_id1_value = sub_id1_value == "" ? "" : "&sub_id1=" + sub_id1_value;affLink_txt.innerHTML = afflink_html + sub_aff_id_value + sub_id1_value;}sub_aff_id_input.addEventListener("input",updateAfflink);sub_id1_input.addEventListener("input", updateAfflink);');
        newScript.appendChild(inlineScript);
        modal.appendChild(newScript);
    }
  
    makeModal();
    makeScript();

    let modal = document.getElementById("LZModal");
    let close = document.getElementById("close");

    modal.style.display = "block";
    close.onclick = () => {
        modal.remove(); 
    };
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.remove(); 
        }
    };

    var previd = null;

    function copyToClipboard(text, buttonID) {
        let dummy = document.createElement("input");
        document.body.appendChild(dummy);
        dummy.setAttribute("value", text);
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
        if (previd != null) {
            previd.value = " Copy  ";
            previd.style.backgroundColor = "#4CAF50";
        }
        previd = document.getElementById(buttonID);
        document.getElementById(buttonID).style.backgroundColor = "red";
        document.getElementById(buttonID).value = "Copied";
    }

    let allButtons = document.querySelectorAll("input[id^=buttonCopy]");
    let allItemsTxt = document.querySelectorAll("input[id^=itemTxt]");
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener("click", function () {
            copyToClipboard(allItemsTxt[i].value, this.id);
        });
    }

    let afflinkButton = document.getElementById("b_afflink");
    let afflinkText = document.getElementById("text_afflink");
    afflinkButton.addEventListener("click", function () {
        copyToClipboard(afflinkText.textContent, this.id);
    })
    
})();
