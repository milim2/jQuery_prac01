// JSON2.js
$(document).on("pagebeforeshow", "#jsonOut", function(){
    $.getJSON("ex2.json", function(data){

        $("#profName").html("Name : " + data.SYST24444.prof.name);
        $("#profAge").html("Age : " + data.SYST24444.prof.age);
        $("#profGender").html("Gender : " + data.SYST24444.prof.gender);
        $("#profFaculty").html("Faculty : " + data.SYST24444.prof.faculty);
        $("#profEmail1").html("Email 1 : " + data.SYST24444.prof.email[0]);
        $("#profEmail2").html("Email 2 : " + data.SYST24444.prof.email[1]);

        $('#students').html('');

        var totalStuds = data.SYST24444.students.length;

        for(stud = 0; stud < totalStuds; stud++) {
            $('#students').append('<li id="'+ stud +'" class="ui-btn ui-icon-carat-r  ui-btn-icon-right">' 
            + '<a href="#studDetail" data-transition="slide">' 
            + data.SYST24444.students[stud] .name 
            + '</a></li>')
        }


        $('#students').on('click', 'li', function(){

            var sid = Number($(this).attr('id'));

            $('#Name').html('Name: ' + data.SYST24444.students[sid].name);
            $('#Age').html('Age: ' + data.SYST24444.students[sid].age);
            $('#Gender').html('Gender: ' + data.SYST24444.students[sid].gender);

            if(data.SYST24444.students[sid].coop) {
            $('#COOP').html('COOP program');

            }else {
                $('#COOP').html('No COOP');   
            }

            var totalEmails = data.SYST24444.students[sid].emails.length;

            $('#Email').html('');
            for(em=0; em < totalEmails ; em++) {
                $('#Email').append('Email ' + data.SYST24444.students[sid].emails[em] +'<br>');
            }


            if(data.SYST24444.students[sid].program == 'CP') {
                $('#Program').html('Program : ' + data.SYST24444.programs.program[0].prog);

            } else if (data.SYST24444.students[sid].program == 'SA'){
                $('#Program').html('Program : ' + data.SYST24444.programs.program[1].prog);
            }

        });
    });
});
 
