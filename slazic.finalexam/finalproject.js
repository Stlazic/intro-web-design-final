function openTab(evt, tabName) {
    var i, tabstuff, tablink;

    tabstuff = document.getElementsByClassName("tabstuff");
    for (i=0; i < tabstuff.length; i++){
        tabstuff[i].style.display="none";
    }

    tablink=document.getElementsByClassName("tablink");
    for (i=0; i < tablink.length; i++){
        tablink[i].className = tablink[i].className.replace("active", "");
    }

    document.getElementById(tabName).style.display="block";
    evt.currentTarget.tabName += "active";
}

function openTab2(evt, tabName) {
    var i, tabstuff, tablink;

    tabstuff = document.getElementsByClassName("tabstuff2");
    for (i=0; i < tabstuff.length; i++){
        tabstuff[i].style.display="none";
    }

    tablink=document.getElementsByClassName("tablink");
    for (i=0; i < tablink.length; i++){
        tablink[i].className = tablink[i].className.replace("active", "");
    }

    document.getElementById(tabName).style.display="block";
    evt.currentTarget.tabName += "active";
}



function getSign(){
    var year, sign
    var dead = false

    year=document.getElementById("bDay").value
    
    if (year==1948 || year==1960 || year==1972 || year==1984 || year==1996 || year==2008 || year==2020){
        sign="Rat"
    }
    else if(year==1949 || year==1961 || year==1973 || year==1985 || year==1997 || year==2009 || year==2021){
        sign="Ox"
    }
    else if(year==1950 || year==1962 || year==1974 || year==1986 || year==1998 || year==2010){
        sign="Tiger"
    }
    else if(year==1951 || year==1963 || year==1975 || year==1987 || year==1999 || year==2011){
        sign="Rabbit"
    }
    else if(year==1952 || year==1964 || year==1976 || year==1988 || year==2000 || year==2012){
        sign="Dragon"
    }
    else if(year==1953 || year==1965 || year==1977 || year==1989 || year==2001 || year==2013){
        sign="Snake"
    }
    else if(year==1954 || year==1966 || year==1978 || year==1990 || year==2002 || year==2014){
        sign="Horse"
    }
    else if(year==1955 || year==1967 || year==1979 || year==1991 || year==2003 || year==2015){
        sign="Goat"
    }
    else if(year==1956 || year==1968 || year==1980 || year==1992 || year==2004 || year==2016){
        sign="Monkey"
    }
    else if(year==1957 || year==1969 || year==1981 || year==1993 || year==2005 || year==2017){
        sign="Rooster"
    }
    else if(year==1958 || year==1970 || year==1982 || year==1994 || year==2006 || year==2018){
        sign="Dog"
    }
    else if(year==1959 || year==1971 || year==1983 || year==1995 || year==2007 || year==2019){
        sign="Pig"
    }
    else if(year<1948){
        dead = true
    }
    else(
        sign="Unknown, Please put in a Real Birth Year"
    )
  

    if (dead==false){
        document.getElementById("result").innerHTML="Your Zodiac Animal="+ sign
    }
    else if(dead==true){
        document.getElementById("result").innerHTML="You can't be THAT old, silly"
    }
   
}