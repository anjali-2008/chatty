
//linking pages
 //screen1
    onEvent("signin", "click", function(event) {
    setScreen("sign_in");
     });

    ;onEvent("signup", "click", function(event) {
    setScreen("sign_up");
     });


 //screen signup
     onEvent("button6", "click", function(event) {
     setScreen("front_screen");
      });

     onEvent("button3", "click", function(event) {
     setScreen("T&C");
      });
      

 //screen signin
     onEvent("button5", "click", function(event) {
     setScreen("front_screen");
      });
      
     onEvent("button4", "click", function(event) {
     setScreen("T&C");
      });
      
      
 //screen T&C
      onEvent("checkbox1", "click", function(event) {
      onEvent("button18", "click", function(event) {
      setScreen("main");
      });
  });
      
 //screen main  
     onEvent("button8", "click", function(event) {
     setScreen("community");
      });
      
      onEvent("button9", "click", function(event) {
      setScreen("recieve_a_message");
      });
      
      onEvent("button10", "click", function(event) {
      setScreen("send_a_message");
      });
      
      onEvent("button7", "click", function(event) {
      setScreen("front_screen");
      });
      
      onEvent("button11", "click", function(event) {
      setScreen("report_user");
      });
      
      onEvent("button24", "click", function(event) {
      setScreen("find_people");
      });
      
      onEvent("button19", "click", function(event) {
      setScreen("feedback");
      });
      
       onEvent("button30","click",function(event){
        setScreen("tips_and_hacks");
      });
  
 //screen find_people
      onEvent("button12", "click", function(event) {
      setScreen("main");
      });


 //screen community
      onEvent("button1", "click", function(event) {
      setScreen("main");
      });
      
      
 //screen send_a_ message
      onEvent("button17", "click", function(event) {
      setScreen("main");
      });
      
      
 //screen recieve_a_ message
      onEvent("button2", "click", function(event) {
      setScreen("main");
      });
 //screen report_user
      onEvent("button23","click",function(event){
        setScreen("main");
      });
      
  //screen report_user
      onEvent("button29","click",function(event){
        setScreen("main");
      });
      
  //screen tips_and_hacks
  onEvent("button31","click",function(event){
        setScreen("main");
      });
  

//systems
 //system signup 
       onEvent("button3", "click", function(event) {
       createRecord("Account", {Username:(getText("text_input3")), Password:(getText("text_input4")), TimeCreated:Date()}, function(record) {
       setScreen("T&C");
       setScreen("sign_in")
        });
        });
        
 //system signin
onEvent("button4", "click", function(event) {
  readRecords("Account", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if ((records[i]).Username == getText("text_input1")) {
        if ((records[i]).Password == getText("text_input2")) {
          setScreen("main");
          setText("username",getText("text_input1"));
        } else {
          setText("label1", "Wrong Username or Password");
          setScreen("sign_in")
        }
      } else {
        setText("label1", "Wrong Username or  Password ");
       setScreen("sign_in")
      }
    }
  });
});


 //system community
 
 onEvent("button16", "click", function(event) {
  createRecord("community", {Message:(getText("text_input10")), From:(getText("text_input1")), TimeSent:Date()}, function(record) {
  setText("text_input10","");
  });
});
timedLoop(1000, function() {
  readRecords("community", {}, function(records) {
    for (var o =0; o < records.length; o++) {
      setText("text_area8",((records[o]).From + ":" + ("   " + (" " + (records[o]).Message + ("   " + ("" + ""))))));
    }
  });
});


//system community photosend
  onEvent("photo", "change", function( ) {
  setImageURL("image1", getImageURL("photo"));
  
  createRecord("communityPhotos",{FromUsername:(getText("username")), Photo:(getImageURL("image1")),TimeSent:Date()}, function(record) {
    setTimeout(function() {}, 2000);
    
  
  });
});

//system Send Messages
onEvent("button13", "click", function( ) {
  createRecord("Messages", {ToUsername:(getText("text_input7")), FromUsername:(getText("username")), Message:(getText("text_input6")),TimeSent:Date()}, function(record) {
    setTimeout(function() {}, 2000);
  });
  setText("text_input6", " ");
  setText("text_input7"," ");
});

//system Recieve messages
onEvent("button9", "click", function( ) {
  readRecords("Messages", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if (getText("username") == (records[i]).ToUsername) {
        setText("text_area3", ("   " + (records[i]).Message));
        setText("text_input8"," " + ((records[i]).FromUsername ));
      } else {
        setText("text_input8", " ");
        setText("text_area3", "No Messages");
      }
    }
  });
});
// system refresh
onEvent("button15", "click", function( ) {
   readRecords("Messages", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if (getText("username") == (records[i]).ToUsername) {
       setTimeout(function() {
        setText("text_input8", " " + ((records[0]).FromUsername));
        setText("text_area3",("   " + (" " + (records[0]).Message)));
      }, 1000);
      } else {
        setText("text_input8", " ");
         setText("text_area3", "No Messages");
      }
    }
  });
});

 //system report
 onEvent("button22", "click", function(event) {
  createRecord("Report", {VictimName:(getText("text_input12")),violatorName:(getText("text_input5")), Complaint:(getText("text_input13")),TimeSent:Date(),realUsername:("username")}, function(record) {
  setText("text_input12"," ");
  setText("text_input5"," ");
  setText("text_input13"," ");
  });
});

//system find_people
onEvent("button24", "click", function(event) {
  setScreen("find_people");
  setText("text_area1"," "+(getColumn("Account", "Username")));
});

//system feedback
 onEvent("button28", "click", function(event) {
  createRecord("Feedback", {realUsername:(getText("username")), Username:(getText("text_input9")), Feedback:(getText("text_input14")),TimeSent:Date()}, function(record) {
  setText("text_input9"," ");
  setText("text_input14"," ");
  });
});
