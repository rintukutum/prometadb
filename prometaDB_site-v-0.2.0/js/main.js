function popitup(url) {
                        newwindow=window.open(url,'name','height=700,width=900,align=center');
                        if (window.focus) {newwindow.focus()}
                        return false;
                    }