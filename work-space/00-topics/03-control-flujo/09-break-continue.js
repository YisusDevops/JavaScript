let i = 0;
while (i < 6) {
    i++;
    if (i === 2 ) {
        continue;
    }
    if (i === 4) {
        break;
    }
    console.log(i);
}

//break and continue: se utiliza para "for" "for of" "for in" "do while"