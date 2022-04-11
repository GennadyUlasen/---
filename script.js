let cells = document.querySelectorAll('#field td');
start(cells);

function start(cells) {
	for (let cell of cells) {
		cell.addEventListener('click', function() {
			this.innerHTML = 'X';
		});
	}
}

	
    function start(cells) {
        let i = 0;
        
        for (let cell of cells) {
            cell.addEventListener('click', function() {
                this.innerHTML = ['X', 'O'][i % 2];
                i++;
            });
        }
    }


    function init(selector) {
        let cells = document.querySelectorAll('#field td');
        let i = 0;
        
        for (let cell of cells) {
            cell.addEventListener('click', function step() {
                this.innerHTML = ['X', 'O'][i % 2];
                this.removeEventListener('click', step);
                i++;
            });
        }
    }


    function start(cells) {
        let i = 0;
        
        for (let cell of cells) {
            cell.addEventListener('click', function step() {
                this.innerHTML = ['X', 'O'][i % 2];
                this.removeEventListener('click', step);
                
                if (isVictory(cells)) {
                    alert(this.innerHTML);
                }
                
                i++;
            });
        }
    }

    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    function isVictory(cells) {
        let combs = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
    
        for (let comb of combs) {
            if (
                cells[comb[0]].innerHTML == cells[comb[1]].innerHTML &&
                cells[comb[1]].innerHTML == cells[comb[2]].innerHTML &&
                cells[comb[0]].innerHTML != ''
            ) {
                return true;
            }
        }
        
        return false;
    }



    function start(cells) {
        let i = 0;
        
        for (let cell of cells) {
            cell.addEventListener('click', function step() {
                this.innerHTML = ['X', 'O'][i % 2];
                this.removeEventListener('click', step);
                
                if (isVictory(cells)) {
                    alert(this.innerHTML);
                } else if (i == 8) {
                    alert('ничья');
                }
                
                i++;
            });
        }
    }