<!DOCTYPE html>
<html>
    <head>
        <title>Letter Counting</title>
        <script>
            function countLetters(name){
                const counts = {};
                for (let i=0;i<name.length;i++){
                    const letter = name[i].toLowerCase();
                    if (counts[letter]){
                        counts[letter]++;
                    }else{
                        counts[letter] = 1;
                    }
                }
                return counts;
            }
            const name = "Manusha";
            const letterCounts = countLetters(name);
            console.log(`The letter counts for the name "${name}" are`);
            console.log(letterCounts);
        </script>
    </head>
</html>
