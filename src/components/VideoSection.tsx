import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Pause, Volume2, VolumeX, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const petShopScript = `Bem-vindo à nossa Pet Shop Online! 
Aqui você encontra tudo para o seu melhor amigo: rações premium, brinquedos divertidos, camas aconchegantes e muito mais.
Com entrega rápida e frete grátis acima de 150 reais, cuidar do seu pet nunca foi tão fácil.
Aproveite nossas promoções exclusivas e faça seu bichinho feliz!
Acesse agora e descubra o paraíso dos pets!`;

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [audioGenerated, setAudioGenerated] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const generateAndPlayAudio = async () => {
    if (audioGenerated && audioRef.current) {
      // Audio already generated, just play/pause
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('elevenlabs-tts', {
        body: { 
          text: petShopScript,
          voiceId: 'EXAVITQu4vr4xnSDxMaL' // Sarah - female voice
        }
      });

      if (error) {
        console.error('Error generating audio:', error);
        toast.error('Erro ao gerar áudio. Tente novamente.');
        return;
      }

      if (data?.audioContent) {
        const audioBlob = new Blob(
          [Uint8Array.from(atob(data.audioContent), c => c.charCodeAt(0))],
          { type: 'audio/mpeg' }
        );
        const audioUrl = URL.createObjectURL(audioBlob);
        
        if (audioRef.current) {
          audioRef.current.src = audioUrl;
          audioRef.current.play();
          setIsPlaying(true);
          setAudioGenerated(true);
        }
      }
    } catch (err) {
      console.error('Error:', err);
      toast.error('Erro ao conectar com o servidor de áudio.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🎬 Conheça Nossa Pet Shop
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ouça nossa apresentação com voz IA e descubra tudo que temos para oferecer ao seu pet!
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
          <div className="relative aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
            {/* Animated Pet Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 text-6xl animate-bounce" style={{ animationDelay: '0s' }}>🐕</div>
              <div className="absolute top-20 right-20 text-5xl animate-bounce" style={{ animationDelay: '0.5s' }}>🐈</div>
              <div className="absolute bottom-20 left-1/4 text-4xl animate-bounce" style={{ animationDelay: '1s' }}>🐦</div>
              <div className="absolute bottom-10 right-1/4 text-5xl animate-bounce" style={{ animationDelay: '1.5s' }}>🐠</div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse">
                🏪
              </div>
            </div>

            {/* Audio Visualizer when playing */}
            {isPlaying && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 bg-primary rounded-full animate-pulse"
                    style={{
                      height: `${Math.random() * 30 + 10}px`,
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: '0.5s'
                    }}
                  />
                ))}
              </div>
            )}

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm">
              <div className="text-center p-8 max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  🐾 Pet Shop Online
                </h3>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  {isPlaying ? (
                    <span className="animate-pulse">
                      ▶️ Reproduzindo apresentação com voz IA...
                    </span>
                  ) : (
                    "Clique no play para ouvir nossa apresentação!"
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="p-6 flex items-center justify-center gap-4 bg-card">
            <Button
              size="lg"
              onClick={generateAndPlayAudio}
              disabled={isLoading}
              className="gap-2 px-8"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Gerando áudio...
                </>
              ) : isPlaying ? (
                <>
                  <Pause className="w-5 h-5" />
                  Pausar
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" />
                  {audioGenerated ? 'Reproduzir' : 'Ouvir Apresentação IA'}
                </>
              )}
            </Button>

            {audioGenerated && (
              <Button
                variant="outline"
                size="lg"
                onClick={toggleMute}
                className="gap-2"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </Button>
            )}
          </div>

          {/* Hidden Audio Element */}
          <audio
            ref={audioRef}
            onEnded={handleAudioEnd}
            className="hidden"
          />
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-4">
          🎙️ Áudio gerado por Inteligência Artificial com voz feminina natural
        </p>
      </div>
    </section>
  );
};
