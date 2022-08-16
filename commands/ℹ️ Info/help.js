module.exports = {
    name: "help",
    code: `
    $title[1;**__Help__**]
    $description[1;Hello There! Thanks for using our bot. you can view a few commands below!
Your current prefix is **$getServerVar[prefix]**]
    $color[1;RANDOM]
    
    $title[2;**__Categorys__**]
    $description[2;
>>> <:emoji1:1008969884375470171> Info Commands: \`$getServerVar[prefix]help info\`
    
<:emoji5:1008972204177895446> Fun Commands: \`$getServerVar[prefix]help fun\`
    
<:emoji3:1008971656091410532> Economy Commands:  \`$getServerVar[prefix]help economy\`
    
<:emoji:1008969886535536721> General Commands: \`$getServerVar[prefix]help general\`

<:emoji2:1008969882148282458> Moderation Commands: \`$getServerVar[prefix]help mod\`

<:emoji4:1008971653897789450> Owner Commands: \$getServerVar[prefix]help owner\`]
    $color[2;RANDOM]`
}
// Help for information 
