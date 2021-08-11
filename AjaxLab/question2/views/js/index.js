$(() => {

    const addedSuccess = (data) => {
        $("#question").val(data);
        $("#msg").text("Data returned successfully");
        focus();
    }
    
    const noSuccess = () => {
        $("#msg").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    const focus = () => {
        $("#question").focus(function() {
            this.select();
        });
    }

    $("#add").submit(() => {
        var quest = $("#question").val();
        $.get({
            url: "/8ball",
            data: { question: quest },
            contentType: "application/json; charset=utf-8"
        }).done(addedSuccess)
            .fail(noSuccess);
        return false;
    });
});