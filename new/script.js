document.addEventListener('DOMContentLoaded', () => {
    // กำหนดตัวแปรที่ใช้บ่อย
    const modal = document.getElementById("myModal");
    const closeBtn = document.getElementsByClassName("close-btn")[0];
    const cards = document.querySelectorAll('.card');
    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBody");

    // ฐานข้อมูลเนื้อหาสำหรับ Pop-up
    const modalContent = {
        'ppe': {
            title: "👕 แว่นตาและเสื้อคลุมปฏิบัติการ",
            body: `
                <p>การสวมใส่ <strong>PPE (Personal Protective Equipment)</strong> เป็นด่านแรกของการป้องกันตนเอง:</p>
                <ul>
                    <li><strong>เสื้อคลุมแลบ (Lab Coat):</strong> ควรติดกระดุมให้ครบถ้วนเพื่อป้องกันผิวหนังและเสื้อผ้าจากสารเคมี.</li>
                    <li><strong>แว่นตานิรภัย (Safety Goggles):</strong> จำเป็นอย่างยิ่งในการป้องกันดวงตาจากการกระเด็นของสารเคมี.</li>
                    <li><strong>ถุงมือ:</strong> เลือกชนิดให้เหมาะสมกับสารเคมี (เช่น ไนไตรล์).</li>
                </ul>
                <p><strong>❌ ข้อควรระวังเพิ่มเติม:</strong> ห้ามสวมรองเท้าแตะ และต้องมัดผมที่ยาวให้เรียบร้อย!</p>
            `
        },
        'corrosive': {
            title: "⚠️ กรดและด่างเข้มข้น (Corrosive Agents)",
            body: `
                <p>สารประเภทนี้มีฤทธิ์<strong>กัดกร่อนเนื้อเยื่อ</strong>ได้รุนแรง เช่น กรดซัลฟิวริก (H₂SO₄) หรือโซเดียมไฮดรอกไซด์ (NaOH).</p>
                <h3>หลักความปลอดภัยสำคัญ:</h3>
                <ol>
                    <li><strong>การเจือจาง:</strong> ให้เติม <strong>กรดลงในน้ำ</strong> เสมอ อย่างช้า ๆ ห้ามเติมน้ำลงในกรดเข้มข้นเด็ดขาด!</li>
                    <li><strong>การถ่ายเท:</strong> ต้องทำใน <strong>ตู้ดูดควัน (Fume Hood)</strong> เท่านั้น.</li>
                    <li><strong>การปฐมพยาบาล:</strong> หากสัมผัสสารเคมี ให้ล้างบริเวณที่โดนด้วยน้ำสะอาดปริมาณมากอย่างน้อย 15 นาที และรีบแจ้งอาจารย์ทันที.</li>
                </ol>
                <p style="font-style: italic;">**จำไว้เสมอ: Add Acid to Water**</p>
            `
        }
        // คุณสามารถเพิ่มหัวข้อใหม่ได้ที่นี่ เช่น 'flammable': { ... }
    };

    // 1. การจัดการการคลิกที่ Card
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const topic = this.getAttribute('data-topic');
            const content = modalContent[topic];

            if (content) {
                modalTitle.innerHTML = content.title;
                modalBody.innerHTML = content.body;
                modal.style.display = "block";
            }
        });
    });

    // 2. การจัดการปุ่มปิด (x)
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // 3. การจัดการการคลิกนอก Modal
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});