/*
Aries: March 21 - Apr 20
Taurus: Apr 21 - May 21
Gemini: May 22 - June 21
Cancer: June 22 - July 22
Leo: July 23 - Aug 22
Virgo: Aug 23 - sept 22
Libra: Sept 23 - Oct 22
Scorpio: Oct 23 - Nov 21
Sagittarius: Nov 22 - Dec 21
Capricorn: Dec 22 - Jan 20
Aquarius: Jan 21 - Feb 19
Pisces: Feb 20 - March 20
*/

function validateName(x) {
    if (x == "") {
        alert("Please Enter Your Name");
        return false;
    }
}

function validateDate(x, y) {
    if (x == "" || y == "") {
        alert("Invalid Date");
        return false;
    }
    if (y == 2 && (x == 31 || x == 30 || x == 29)) {
        alert("Invalid Date");
        return false;
    }
    if (x == 31 && (y == 9 || x == 4 || x == 6 || x == 11)) {
        alert("Invalid Date");
        return false;
    }
    if (x >= 32 || y >= 13) {
        alert("Invalid Date");
        return false;
    }
}

function determineTime(day, month){
    if((month == 1 && day >= 20) || (month == 2 && day <= 18)){
        return 1;
    }
    if((month == 2 && day >= 21) || (month == 3 && day <= 20)){
        return 2;
    }
    if((month == 3 && day >= 21) || (month == 4 && day <= 19)){
        return 3;
    }
    if((month == 4 && day >= 20) || (month == 5 && day <= 20)){
        return 4;
    }
    if((month == 5 && day >= 21) || (month == 6 && day <= 20)){
        return 5;
    }
    if((month == 6 && day >= 21) || (month == 7 && day <= 22)){
        return 6;
    }
    if((month == 7 && day >= 23) || (month == 8 && day <= 22)){
        return 7;
    }
    if((month == 8 && day >= 23) || (month == 9 && day <= 22)){
        return 8;
    }
    if((month == 9 && day >= 23) || (month == 10 && day <= 22)){
        return 9;
    }
    if((month == 10 && day >= 23) || (month == 11 && day <= 21)){
        return 10;
    }
    if((month == 11 && day >= 22) || (month == 12 && day <= 21)){
        return 11;
    }
    if((month == 12 && day >= 22) || (month == 1 && day <= 19)){
        return 12;
    }
}


function determineSign(day, month){
    var a = determineTime(day, month);
    var sign = "";
    if(a == 1) {
        sign = "Aquarius";
    }
    if(a == 2) {
        sign = "Pisces";
    }
    if(a == 3) {
        sign = "Aries";
    }
    if(a == 4) {
        sign = "Taurus";
    }
    if(a == 5) {
        sign = "Gemini";
    }
    if(a == 6) {
        sign = "Cancer";
    }
    if(a == 7) {
        sign = "Leo";
    }
    if(a == 8) {
        sign = "Virgo";
    }
    if(a == 9) {
        sign = "Libra";
    }
    if(a == 10) {
        sign = "Scorpio";
    }
    if(a == 11) {
        sign = "Sagittarius";
    }
    if(a == 12) {
        sign = "Capricorn";
    }
    return sign;
}

function determineImg(x, y){
    var a = determineSign(x, y);
    return "img/" + a + ".png"
}

function determineHoroscope(x,y){
    var a = determineTime(x, y);
    var horoscope =""
    if(a == 1) {
        horoscope ="A dreamy space takes you on a sentimental journey into the past. You are gracious and gentle while resolving sensitive issues and family matters." +
            "A young woman or daughter is ready to make decisions and have her own way." +
            "A vacation is in the pipeline. Lucky number 15. Colour pastels."
    }
    if(a == 2) {
        horoscope = "You retain a position of authority in a business and prove your metal despite competition. You enjoy love and support in relationships as romance is in the air and there is lightness to your step." +
            "You focus on fitness and diet programs to rejuvenate energy." +
            "Lucky number 3. Colour red."
    }
    if(a == 3) {
        horoscope = "You grow and gain insight into yourself and your conditioned responses." +
            "Don't allow emotions to influence business. Temporary setbacks or delays should be taken in your stride." +
            "Finally the sun shines through the dark night of the moon to bring light into darkness. Lucky number 18. Colour gray."
    }
    if(a == 4) {
        horoscope = "The Knight of Wands brings action and energy into your life as things begin to move at a fast pace today." +
            "You may need to take quick decisions on business options and personal relationships. Guard against being too impetuous when making long-term commitments." +
            "Lucky number 4. Colour red."
    }
    if(a == 5) {
        horoscope = "This is a good time to tackle difficult tasks or people as luck is on your side and people are open to you." +
            "A gamble pays off unexpectedly and a few interesting surprises are in store. Take a quantum leap as good fortune is with you. " +
            "A journey is on the cards! Lucky number 10. Colour blue."
    }
    if(a == 6) {
        horoscope = "You are likely to make new beginnings in relationships with a positive and loving approach. A new path to complete a difficult assignment opens up for you as you get assistance from an experienced person." +
            "A surprising turn of events may change your plans. Lucky number 17. Colour white."
    }
    if(a == 7) {
        horoscope = "You are relaxed at work, content at home, receptive to new people and open to opportunities. Women play significant and positive roles in your life and you generally get on well with them." +
            "Children bring laughter. A friendly approach can resolve an old conflict." +
            "Lucky number 3. Colour pink."
    }
    if(a == 8) {
        horoscope ="The Princess of Swords gets you in touch with great practical wisdom to handle details today. You are firm and aggressive when achieving targets." +
            "Your subtlety and wisdom carry you smoothly through difficult situations. You manage business affairs with dexterity." +
            "Lucky number 11. Colour blue."
    }
    if(a == 9) {
        horoscope = "Remember to celebrate life and whatever it brings every moment! Breakthroughs in patterns and addictions are on the cards! " +
            "Restrictive situations and relationships are not likely to last as new beginnings are on the cards. " +
            "Love and romance make this an exciting day. Lucky number 4. Colour red."
    }
    if(a == 10) {
        horoscope ="Varying occupation can be pleasant as you recharge your energy and interest. You may feel isolated and pay wandering visits to friends. " +
            "End of the day brings positive changes and appreciation. Schedules are reassessed and revised and prove to be for the better." +
            "Lucky number 2. Colour green."
    }
    if(a == 11) {
        horoscope ="You could be stressed as many ideas interfere with each other and cause confusion. You tend to waste energy in details, causing neglect of what is vital." +
            " Beware of abandoning projects on the brink of success." +
            " Don't allow bad moods to affect your clarity. Lucky number 8. Colour white."
    }
    if(a == 12) {
        horoscope ="Things are changing around you as you step into new opportunities and dimensions. You play the role of consultant or advisor and share your knowledge and experience." +
            "You are caring in established relationships and can expect loyalty and support therein."+
            "Lucky number 18. Colour blue."
    }
    return horoscope;
}

function checkBirthday(x, y){
    var birth = "";
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() +1 ;
    if(x == dd && y == mm){
        birth = "Happy Birthday! ";
    }
    return birth;
}



function onSubmit(){
    var name = document.getElementById("firstname").value;
    var d = parseInt(document.getElementById("day").value);
    var m = parseInt(document.getElementById("month").value);
    validateName(name);
    validateDate(d, m);
    document.getElementById("sign").innerHTML = "Hi " + name + ", " + checkBirthday(d, m) + "Your sign is: " + determineSign(d, m);
    document.getElementById("image").src = determineImg(d, m);
    document.getElementById("horoscope").innerHTML = determineHoroscope(d, m);
}
