document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // メール送信のロジックをここに実装
        // 今は簡単な確認メッセージを表示
        alert('お問い合わせありがとうございます。内容を確認し、ご連絡いたします。');
        
        // フォームをリセット
        form.reset();
    });
    
    // 入力フィールドのアニメーション効果
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});

// キーボードナビゲーション強化
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});