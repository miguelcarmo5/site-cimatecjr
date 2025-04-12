document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  const contentArea = document.getElementById('searchable-content');

  if (!searchForm || !searchInput || !contentArea) {
    console.warn('Elementos de busca não encontrados no DOM. Funcionalidade de busca desativada.');
    return; 
  }

  let originalContentHTML = contentArea.innerHTML; 
  function removeHighlights() {
    
    if (contentArea.innerHTML !== originalContentHTML) {
         contentArea.innerHTML = originalContentHTML;
    }
  }
  function addHighlights(term) {
    
    removeHighlights();
    originalContentHTML = contentArea.innerHTML; 
    if (!term) { 
      return;
    }

    const regex = new RegExp(`(${escapeRegExp(term)})`, 'gi'); 
    let matchFound = false; 

    
    function findAndReplaceText(node) {
        if (node.nodeType === Node.TEXT_NODE) { 
            if (node.parentNode.nodeName === 'SCRIPT' || node.parentNode.nodeName === 'STYLE' || node.parentNode.nodeName === 'MARK') {
                return;
            }
            const text = node.textContent;
            if (regex.test(text)) {
                matchFound = true; 
                const newNode = document.createElement('span'); 
                newNode.innerHTML = text.replace(regex, '<mark>$1</mark>');
                node.parentNode.replaceChild(newNode, node);
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) { 
            
            
            Array.from(node.childNodes).forEach(child => findAndReplaceText(child));
        }
    }

    
    findAndReplaceText(contentArea);

    
    
     const marks = contentArea.querySelectorAll('mark');
     marks.forEach(mark => {
        if (mark.childNodes.length === 1 && mark.firstChild.nodeType === Node.TEXT_NODE){
             
         } else {
             const textContent = mark.textContent;
             mark.innerHTML = textContent; 
         }
         if(mark.textContent.trim() === ''){
             mark.remove();
         }
     });


    return matchFound; 
  }

  
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
  }

  
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const searchTerm = searchInput.value.trim();
    const found = addHighlights(searchTerm); 
     if (found) {
        const firstMark = contentArea.querySelector('mark');
        if (firstMark) {
          setTimeout(() => {
              firstMark.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 100); 
        }
     } else if(searchTerm) {
         console.log("Nenhum resultado encontrado para:", searchTerm);
     }
  });
  searchInput.addEventListener('input', () => {
      if (searchInput.value.trim() === '') {
          removeHighlights();
      }
  });

});