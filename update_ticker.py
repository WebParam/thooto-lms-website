from pathlib import Path
root = Path('.')
old_block = '''        <div class= scrolling-ticker-box>
            <div class=scrolling-content>
                <span><img src=images/sanlam.svg alt=></span>
 <span><img src=images/accenture.svg alt=></span>
                <span><img src=images/logo-atronsolutions.svg alt=></span>
 <span><img src=images/iQbusiness.jpg alt=></span>
                <span><img src=images/microsoft-logo-svgrepo-com.svg alt=></span>
 <span><img src=images/amazon-2-logo-svgrepo-com.svg alt=></span>
                <span><img src=images/sanlam.svg alt=></span>
 <span><img src=images/accenture.svg alt=></span>
                <span><img src=images/logo-atronsolutions.svg alt=></span>
 <span><img src=images/iQbusiness.jpg alt=></span>
                <span><img src=images/microsoft-logo-svgrepo-com.svg alt=></span>
 <span><img src=images/amazon-2-logo-svgrepo-com.svg alt=></span>
            </div>

            <div class=scrolling-content>
                <span><img src=images/sanlam.svg alt=></span>
 <span><img src=images/accenture.svg alt=></span>
                <span><img src=images/logo-atronsolutions.svg alt=></span>
 <span><img src=images/iQbusiness.jpg alt=></span>
                <span><img src=images/microsoft-logo-svgrepo-com.svg alt=></span>
 <span><img src=images/amazon-2-logo-svgrepo-com.svg alt=></span>
                <span><img src=images/sanlam.svg alt=></span>
 <span><img src=images/accenture.svg alt=></span>
                <span><img src=images/logo-atronsolutions.svg alt=></span>
 <span><img src=images/iQbusiness.jpg alt=></span>
                <span><img src=images/microsoft-logo-svgrepo-com.svg alt=></span>
 <span><img src=images/amazon-2-logo-svgrepo-com.svg alt=></span>
            </div>
        </div>'''

new_block = '''        <div class=scrolling-ticker-box>
            <div class=scrolling-content>
                <span><img src=images/sanlam.svg alt=></span>
 <span><img src=images/accenture.svg alt=></span>
                <span><img src=images/logo-atronsolutions.svg alt=></span>
 <span><img src=images/iQbusiness.jpg alt=></span>
                <span><img src=images/microsoft-logo-svgrepo-com.svg alt=></span>
 <span><img src=images/amazon-2-logo-svgrepo-com.svg alt=></span>
                <span><img src=images/mtn.svg alt=></span>
 <span><img src=images/vodacom.svg alt=></span>
                <span><img src=images/stb.svg alt=></span>
 <span><img src=images/sanlam.svg alt=></span>
                <span><img src=images/accenture.svg alt=></span>
 <span><img src=images/logo-atronsolutions.svg alt=></span>
                <span><img src=images/iQbusiness.jpg alt=></span>
 <span><img src=images/microsoft-logo-svgrepo-com.svg alt=></span>
                <span><img src=images/amazon-2-logo-svgrepo-com.svg alt=></span>
 <span><img src=images/mtn.svg alt=></span>
                <span><img src=images/vodacom.svg alt=></span>
 <span><img src=images/stb.svg alt=></span>
            </div>

            <div class=scrolling-content>
                <span><img src=images/sanlam.svg alt=></span>
 <span><img src=images/accenture.svg alt=></span>
                <span><img src=images/logo-atronsolutions.svg alt=></span>
 <span><img src=images/iQbusiness.jpg alt=></span>
                <span><img src=images/microsoft-logo-svgrepo-com.svg alt=></span>
 <span><img src=images/amazon-2-logo-svgrepo-com.svg alt=></span>
                <span><img src=images/mtn.svg alt=></span>
 <span><img src=images/vodacom.svg alt=></span>
                <span><img src=images/stb.svg alt=></span>
 <span><img src=images/sanlam.svg alt=></span>
                <span><img src=images/accenture.svg alt=></span>
 <span><img src=images/logo-atronsolutions.svg alt=></span>
                <span><img src=images/iQbusiness.jpg alt=></span>
 <span><img src=images/microsoft-logo-svgrepo-com.svg alt=></span>
                <span><img src=images/amazon-2-logo-svgrepo-com.svg alt=></span>
 <span><img src=images/mtn.svg alt=></span>
                <span><img src=images/vodacom.svg alt=></span>
 <span><img src=images/stb.svg alt=></span>
            </div>
        </div>'''

count = 0
for path in root.rglob('*.html'):
    text = path.read_text(encoding='utf-8')
    normalized = text.replace('\r\n', '\n')
    if old_block in normalized:
        normalized = normalized.replace(old_block, new_block)
        updated = normalized.replace('\n', '\r\n')
        path.write_text(updated, encoding='utf-8')
        count += 1
print(f'Updated {count} files')
