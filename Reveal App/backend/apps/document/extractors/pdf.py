"""
Extract PDF text through PDFMiner.
"""

from pdfminer.pdfinterp import PDFResourceManager, PDFPageInterpreter
from pdfminer.pdfpage import PDFPage
from pdfminer.converter import TextConverter
from pdfminer.layout import LAParams

from io import StringIO
# from io import BytesIO

# import codecs

def PDF_to_Text(document):

    rsrcmgr = PDFResourceManager()
    retstr = StringIO()
    # codec = 'utf-8'
    laparams = LAParams()
    device = TextConverter(rsrcmgr, retstr, laparams=laparams)
    interpreter = PDFPageInterpreter(rsrcmgr, device)

    password = ""
    maxpages = 0
    caching = True
    pagenos = set()

    # Extract text
    for page in PDFPage.get_pages(document, pagenos, maxpages=maxpages, password=password, caching=caching, check_extractable=True):
        interpreter.process_page(page)

    # Get text from StringIO
    text = retstr.getvalue().encode("utf-8")

    # Cleanup
    # document.close()
    device.close()
    retstr.close()

    return text