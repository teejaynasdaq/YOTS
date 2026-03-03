import { useEffect, useRef, useState } from 'react';
import { Save, Plus, Trash2, Upload, ExternalLink, Eraser } from 'lucide-react';

type MerchItem = {
  id: string;
  title: string;
  image: string;
  link?: string;
};

type MediaLinks = {
  youtubeVideo: string;
  youtubeChannel: string;
  whatsappChannel: string;
};

type SiteTexts = {
  slogan: string;
  about: string;
  beliefs: string[];
};

type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
};

const DEFAULT_MEDIA: MediaLinks = {
  youtubeVideo: 'https://youtu.be/J53gX3o9NHg',
  youtubeChannel: 'https://youtube.com/@yots.official?si=qvFJnKbdKPBwMMbS',
  whatsappChannel: 'https://whatsapp.com/channel/0029Vb7AEz7J3jurrbZUrc3R',
};

export default function AdminPanel() {
  const [media, setMedia] = useState<MediaLinks>(DEFAULT_MEDIA);
  const [merch, setMerch] = useState<MerchItem[]>([]);
  const [siteTexts, setSiteTexts] = useState<SiteTexts>({
    slogan: 'By Christ, In Christ, For Christ.',
    about:
      'We are a student-led Christian movement passionate about encountering God, growing in faith, and impacting our campus and beyond with the love of Christ.',
    beliefs: [
      'The Bible is the inspired and authoritative Word of God',
      'There is one God, eternally existent in three persons: Father, Son, and Holy Spirit',
      'Jesus Christ is fully God and fully man, born of a virgin',
      'Salvation is by grace through faith in Jesus Christ alone',
      'The Holy Spirit empowers believers for Christian living and service',
      'The Church is the body of Christ, called to worship, fellowship, and mission',
    ],
  });
  const [events, setEvents] = useState<EventItem[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const linksRaw = localStorage.getItem('yots_media_links');
      if (linksRaw) setMedia(JSON.parse(linksRaw));
      const merchRaw = localStorage.getItem('yots_merch_items');
      if (merchRaw) setMerch(JSON.parse(merchRaw));
      const textsRaw = localStorage.getItem('yots_site_texts');
      if (textsRaw) setSiteTexts(JSON.parse(textsRaw));
      const eventsRaw = localStorage.getItem('yots_events');
      if (eventsRaw) setEvents(JSON.parse(eventsRaw));
    } catch {}
  }, []);

  const handleSave = () => {
    localStorage.setItem('yots_media_links', JSON.stringify(media));
    localStorage.setItem('yots_merch_items', JSON.stringify(merch));
    localStorage.setItem('yots_site_texts', JSON.stringify(siteTexts));
    localStorage.setItem('yots_events', JSON.stringify(events));
    alert('Saved to this browser. Click “Download JSON” to publish to hosting.');
  };

  const addMerch = () => {
    setMerch((prev) => [
      ...prev,
      { id: `item-${Date.now()}`, title: 'New item', image: '', link: '' },
    ]);
  };

  const removeMerch = (id: string) => {
    setMerch((prev) => prev.filter((m) => m.id !== id));
  };

  const pickImage = async (id: string, type: 'merch' | 'event') => {
    const input = fileRef.current;
    if (!input) return;
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        if (type === 'merch') {
          setMerch((prev) => prev.map((m) => (m.id === id ? { ...m, image: dataUrl } : m)));
        } else {
          setEvents((prev) => prev.map((e) => (e.id === id ? { ...e, image: dataUrl } : e)));
        }
      };
      reader.readAsDataURL(file);
      input.value = '';
    };
    input.click();
  };

  const downloadJSON = () => {
    const payload = {
      media,
      merch,
      siteTexts,
      events,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'yots-content.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const resetAll = () => {
    localStorage.removeItem('yots_media_links');
    localStorage.removeItem('yots_merch_items');
    localStorage.removeItem('yots_site_texts');
    localStorage.removeItem('yots_events');
    alert('Local changes cleared. Reload the page to see defaults.');
  };

  const addBelief = () => {
    setSiteTexts((prev) => ({ ...prev, beliefs: [...prev.beliefs, ''] }));
  };
  const removeBelief = (index: number) => {
    setSiteTexts((prev) => ({
      ...prev,
      beliefs: prev.beliefs.filter((_, i) => i !== index),
    }));
  };

  const addEvent = () => {
    setEvents((prev) => [
      ...prev,
      {
        id: `event-${Date.now()}`,
        title: 'New Event',
        date: '',
        time: '',
        location: '',
        description: '',
        image: '',
      },
    ]);
  };
  const removeEvent = (id: string) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <section className="yots-section bg-[#0a0a0a]">
      <div className="yots-container">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Admin Content Manager</h2>
          <p className="text-white/70">Update links, texts, merch, and events. Open via #admin</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-sm border border-white/10 bg-[#141414] p-6">
            <h3 className="text-xl font-semibold mb-4">Site Texts</h3>
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm text-white/70">Slogan</span>
                <input
                  type="text"
                  value={siteTexts.slogan}
                  onChange={(e) => setSiteTexts({ ...siteTexts, slogan: e.target.value })}
                  className="mt-1 w-full bg-black text-white border border-white/20 rounded-sm p-2"
                />
              </label>
              <label className="block">
                <span className="text-sm text-white/70">About</span>
                <textarea
                  value={siteTexts.about}
                  onChange={(e) => setSiteTexts({ ...siteTexts, about: e.target.value })}
                  className="mt-1 w-full bg-black text-white border border-white/20 rounded-sm p-2 h-28"
                />
              </label>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/70">Beliefs</span>
                  <button
                    onClick={addBelief}
                    className="inline-flex items-center gap-2 px-2 py-1 border border-white/30 rounded-sm hover:bg-white hover:text-black text-sm"
                  >
                    <Plus className="w-3 h-3" /> Add
                  </button>
                </div>
                <div className="space-y-2">
                  {siteTexts.beliefs.map((b, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={b}
                        onChange={(e) =>
                          setSiteTexts((prev) => {
                            const beliefs = [...prev.beliefs];
                            beliefs[i] = e.target.value;
                            return { ...prev, beliefs };
                          })
                        }
                        className="flex-1 bg-black text-white border border-white/20 rounded-sm p-2"
                      />
                      <button
                        onClick={() => removeBelief(i)}
                        className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-sm hover:bg-white hover:text-black"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-white/10 bg-[#141414] p-6">
            <h3 className="text-xl font-semibold mb-4">Media Links</h3>
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm text-white/70">YouTube Video (preview)</span>
                <input
                  type="url"
                  value={media.youtubeVideo}
                  onChange={(e) => setMedia({ ...media, youtubeVideo: e.target.value })}
                  className="mt-1 w-full bg-black text-white border border-white/20 rounded-sm p-2"
                  placeholder="https://youtu.be/..."
                />
              </label>
              <label className="block">
                <span className="text-sm text-white/70">YouTube Channel</span>
                <input
                  type="url"
                  value={media.youtubeChannel}
                  onChange={(e) => setMedia({ ...media, youtubeChannel: e.target.value })}
                  className="mt-1 w-full bg-black text-white border border-white/20 rounded-sm p-2"
                  placeholder="https://youtube.com/@..."
                />
              </label>
              <label className="block">
                <span className="text-sm text-white/70">WhatsApp Channel</span>
                <input
                  type="url"
                  value={media.whatsappChannel}
                  onChange={(e) => setMedia({ ...media, whatsappChannel: e.target.value })}
                  className="mt-1 w-full bg-black text-white border border-white/20 rounded-sm p-2"
                  placeholder="https://whatsapp.com/channel/..."
                />
              </label>
            </div>
          </div>

          <div className="rounded-sm border border-white/10 bg-[#141414] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Merch Items</h3>
              <button
                onClick={addMerch}
                className="inline-flex items-center gap-2 px-3 py-2 border border-white/30 rounded-sm hover:bg-white hover:text-black"
              >
                <Plus className="w-4 h-4" /> Add Item
              </button>
            </div>

            <div className="space-y-4">
              {merch.map((item) => (
                <div key={item.id} className="border border-white/10 rounded-sm p-3">
                  <div className="flex items-center gap-3">
                    <div className="w-20 h-20 bg-black border border-white/10 rounded-sm overflow-hidden flex items-center justify-center">
                      {item.image ? (
                        <div className="relative w-full h-full">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                          <button
                            onClick={() =>
                              setMerch((prev) => prev.map((m) => (m.id === item.id ? { ...m, image: '' } : m)))
                            }
                            className="absolute bottom-1 right-1 w-7 h-7 flex items-center justify-center bg-black/60 border border-white/30 rounded-sm"
                            aria-label="Remove image"
                          >
                            <Eraser className="w-4 h-4 text-white" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => pickImage(item.id, 'merch')}
                          className="text-white/70 inline-flex items-center gap-1"
                        >
                          <Upload className="w-4 h-4" /> Upload
                        </button>
                      )}
                    </div>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) =>
                          setMerch((prev) =>
                            prev.map((m) => (m.id === item.id ? { ...m, title: e.target.value } : m)),
                          )
                        }
                        className="bg-black text-white border border-white/20 rounded-sm p-2"
                        placeholder="Item title"
                      />
                      <input
                        type="url"
                        value={item.link ?? ''}
                        onChange={(e) =>
                          setMerch((prev) =>
                            prev.map((m) => (m.id === item.id ? { ...m, link: e.target.value } : m)),
                          )
                        }
                        className="bg-black text-white border border-white/20 rounded-sm p-2"
                        placeholder="External link (optional)"
                      />
                    </div>
                    <button
                      onClick={() => removeMerch(item.id)}
                      className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-sm hover:bg-white hover:text-black"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
              {merch.length === 0 && (
                <div className="text-white/60">No items yet. Click Add Item to start.</div>
              )}
            </div>
          </div>

          <div className="rounded-sm border border-white/10 bg-[#141414] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Events</h3>
              <button
                onClick={addEvent}
                className="inline-flex items-center gap-2 px-3 py-2 border border-white/30 rounded-sm hover:bg-white hover:text-black"
              >
                <Plus className="w-4 h-4" /> Add Event
              </button>
            </div>
            <div className="space-y-4">
              {events.map((ev) => (
                <div key={ev.id} className="border border-white/10 rounded-sm p-3">
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-24 bg-black border border-white/10 rounded-sm overflow-hidden flex items-center justify-center">
                      {ev.image ? (
                        <div className="relative w-full h-full">
                          <img src={ev.image} alt={ev.title} className="w-full h-full object-cover" />
                          <button
                            onClick={() =>
                              setEvents((prev) => prev.map((e) => (e.id === ev.id ? { ...e, image: '' } : e)))
                            }
                            className="absolute bottom-1 right-1 w-7 h-7 flex items-center justify-center bg-black/60 border border-white/30 rounded-sm"
                            aria-label="Remove image"
                          >
                            <Eraser className="w-4 h-4 text-white" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => pickImage(ev.id, 'event')}
                          className="text-white/70 inline-flex items-center gap-1"
                        >
                          <Upload className="w-4 h-4" /> Upload
                        </button>
                      )}
                    </div>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={ev.title}
                        onChange={(e) =>
                          setEvents((prev) =>
                            prev.map((x) => (x.id === ev.id ? { ...x, title: e.target.value } : x)),
                          )
                        }
                        className="bg-black text-white border border-white/20 rounded-sm p-2"
                        placeholder="Title"
                      />
                      <input
                        type="text"
                        value={ev.location}
                        onChange={(e) =>
                          setEvents((prev) =>
                            prev.map((x) => (x.id === ev.id ? { ...x, location: e.target.value } : x)),
                          )
                        }
                        className="bg-black text-white border border-white/20 rounded-sm p-2"
                        placeholder="Location"
                      />
                      <input
                        type="text"
                        value={ev.date}
                        onChange={(e) =>
                          setEvents((prev) =>
                            prev.map((x) => (x.id === ev.id ? { ...x, date: e.target.value } : x)),
                          )
                        }
                        className="bg-black text-white border border-white/20 rounded-sm p-2"
                        placeholder="Date"
                      />
                      <input
                        type="text"
                        value={ev.time}
                        onChange={(e) =>
                          setEvents((prev) =>
                            prev.map((x) => (x.id === ev.id ? { ...x, time: e.target.value } : x)),
                          )
                        }
                        className="bg-black text-white border border-white/20 rounded-sm p-2"
                        placeholder="Time"
                      />
                      <textarea
                        value={ev.description}
                        onChange={(e) =>
                          setEvents((prev) =>
                            prev.map((x) => (x.id === ev.id ? { ...x, description: e.target.value } : x)),
                          )
                        }
                        className="md:col-span-2 bg-black text-white border border-white/20 rounded-sm p-2 h-20"
                        placeholder="Description"
                      />
                    </div>
                    <button
                      onClick={() => removeEvent(ev.id)}
                      className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-sm hover:bg-white hover:text-black"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
              {events.length === 0 && <div className="text-white/60">No events yet. Click Add Event.</div>}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/30 rounded-sm hover:bg-white hover:text-black"
          >
            <Save className="w-4 h-4" /> Save (browser)
          </button>
          <button
            onClick={downloadJSON}
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/30 rounded-sm hover:bg-white hover:text-black"
          >
            <ExternalLink className="w-4 h-4" /> Download JSON
          </button>
          <button
            onClick={resetAll}
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/30 rounded-sm hover:bg-white hover:text-black"
          >
            <Eraser className="w-4 h-4" /> Reset All
          </button>
        </div>
      </div>
      <input ref={fileRef} type="file" accept="image/*" className="hidden" />
    </section>
  );
}
