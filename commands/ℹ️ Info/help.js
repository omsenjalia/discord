module.exports = {
    name: "help",
    code: `
    $title[1;**__Help__**]
    $description[1;Hello There! Thanks for using our bot. you can view a few commands below!
Your current prefix is **$getServerVar[prefix]**]
    $color[1;RANDOM]
    
    $title[2;**__Categorys__**]
    $description[2;
 Info Commands: **$getServerVar[prefix]help info**
    
Fun Commands: **$getServerVar[prefix]help fun**
    
Economy Commands:  **$getServerVar[prefix]help economy**
    
General Commands: **$getServerVar[prefix]help general**

Moderation Commands: **$getServerVar[prefix]help mod**]
    $color[2;RANDOM]`
}
// Help for information 
