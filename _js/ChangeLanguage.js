function ChangeLanguage(language, content)
{
    switch (language) {
        case "Dutch":
            $("#text").html(content);
            $("#HomeTab").html("Home");
            $("#AboutTab").html("Over mezelf");
            $("#OtherTab").html("Mijn collega's");
            $("#LessonTab").html("De lessen");
            $("#Titel").html("Language School ‘Alternative’");
            $("#oTitel").html("Elena Mennes - Leerkracht <br /> Russisch - Engels - Nederlands");
            break;
        case "English":
            $("#text").html(content);
            $("#HomeTab").html("Home");
            $("#AboutTab").html("About myself");
            $("#OtherTab").html("Other teachers");
            $("#LessonTab").html("Lessons");
            $("#Titel").html("Language School ‘Alternative’");
            $("#oTitel").html("Elena Mennes - Teacher <br /> Russian / English / Dutch");
            break;
        case "Russian":
            $("#text").html(content);
            $("#HomeTab").html("главная страница");
            $("#AboutTab").html("о себе");
            //$("#OtherTab").html("другие преподаватели");
            $("#LessonTab").html("уроки");
            $("#Titel").html("языковая школа ‘Альтернатива’");
            $("#oTitel").html("Елена Меннес - преподаватель иностранных  языков <br /> Russian / English / Dutch");
            break;
    }
}