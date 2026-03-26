export const generateRandomToken = () => {
    let token = '';
    for (let i = 0; i < 4; i++) {
      token += Math.floor(Math.random() * 10);
    }
    return `YPLJ-2025-${token}`;
}

export const emailExists = async (email: string, link: string) => {
  try {
    const res = await fetch(`${link}/search?email=${email}`);
    
    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const data = await res.json();

    if (data.length > 0) {
      return 'email already registered';
    }

    return null; 
  } catch (err: any) {
    console.error('emailExists error:', err);
    throw err; 
  }
};

export function copyToClipboard(text: string) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  } else {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }
}