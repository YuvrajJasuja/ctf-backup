const fs = require('fs');
const content = fs.readFileSync('/Users/happy/Desktop/myrepo/ctf-backup/CTFd/themes/final3/templates/challenges.html', 'utf8');

if (!content.includes('{% extends "base.html" %}')) console.log("Missing base.html extends");
if (!content.includes('{% block content %}')) console.log("Missing content block");
if (!content.includes('{% block entrypoint %}')) console.log("Missing entrypoint");
