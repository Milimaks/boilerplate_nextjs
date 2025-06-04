import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { ScrollArea } from "@/shared/components/ui/scroll-area";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui/tabs";
import { motion } from "framer-motion";
import {
  Search,
  Globe2,
  Gauge,
  Plus,
  Save,
  Wrench,
  PencilRuler,
} from "lucide-react";

interface ChecklistItem {
  id: string;
  label: string;
  category: string;
}

interface SavedChecklist {
  id: string;
  name: string;
  items: string[];
  date: string;
}

const seoChecklist: ChecklistItem[] = [
  // Audit & Analyse
  {
    id: "site-audit",
    label:
      "Réaliser un audit SEO complet du site (PageSpeed Insights, Lighthouse)",
    category: "audit",
  },
  {
    id: "page-speed",
    label: "Validation des performances (LCP, FID, CLS)",
    category: "audit",
  },
  {
    id: "search-console",
    label:
      "Vérifier la Search Console pour les erreurs d'indexation, performances, et suggestions d'amélioration",
    category: "audit",
  },

  // Optimisation Technique & Contenu
  {
    id: "meta-title",
    label: "Balise title unique et descriptive (50-60 caractères)",
    category: "technique",
  },
  {
    id: "meta-description",
    label: "Meta description optimisée (150-160 caractères)",
    category: "technique",
  },
  {
    id: "heading-structure",
    label: "Structure des titres H1-H6 cohérente et logique",
    category: "contenu",
  },
  {
    id: "img-alt",
    label: "Attributs alt descriptifs pour toutes les images",
    category: "technique",
  },
  {
    id: "url-structure",
    label: "URLs propres, courtes et descriptives",
    category: "technique",
  },
  {
    id: "mobile-friendly",
    label: "Site responsive et optimisé pour mobile",
    category: "technique",
  },

  {
    id: "ssl",
    label: "Certificat SSL actif (HTTPS)",
    category: "technique",
  },
  {
    id: "sitemap",
    label: "Sitemap XML à jour et soumis à la Search Console",
    category: "technique",
  },
  {
    id: "robots",
    label: "Fichier robots.txt bien configuré pour l'exploration",
    category: "technique",
  },
  {
    id: "content-quality",
    label: "Contenu unique, utile et bien structuré (>300 mots)",
    category: "contenu",
  },
  {
    id: "internal-links",
    label: "Liens internes pertinents et bien hiérarchisés",
    category: "contenu",
  },
  {
    id: "keywords",
    label: "Mots-clés placés naturellement dans titres, textes et ALT",
    category: "contenu",
  },
  {
    id: "social-meta",
    label: "Meta tags pour réseaux sociaux (Open Graph, Twitter)",
    category: "technique",
  },
  {
    id: "schema-markup",
    label: "Balisage Schema.org pour améliorer la visibilité",
    category: "technique",
  },

  // SEO Off-Page
  {
    id: "backlinks",
    label: "Backlinks de qualité provenant de sites autoritaires",
    category: "off-page",
  },
  {
    id: "brand-mentions",
    label: "Récupération des mentions de marque sans lien",
    category: "off-page",
  },
  {
    id: "social-signals",
    label: "Présence active sur les réseaux sociaux (indirectement bénéfique)",
    category: "off-page",
  },

  // Optimisation continue
  {
    id: "performance-monitoring",
    label: "Suivi des performances SEO avec Google Analytics",
    category: "audit",
  },
  {
    id: "monthly-audit",
    label: "Réaliser un audit SEO mensuel pour ajuster la stratégie",
    category: "audit",
  },
];

export function SeoChecklist() {
  const [checklists, setChecklists] = useState<SavedChecklist[]>([]);
  const [currentChecklist, setCurrentChecklist] = useState<string[]>([]);
  const [checklistName, setChecklistName] = useState("");
  const [currentChecklistId, setCurrentChecklistId] = useState<string | null>(
    null
  );
  const [activeTab, setActiveTab] = useState("checklist");

  const tabLength = seoChecklist.length;

  const handleCheck = (id: string, checked: boolean) => {
    setCurrentChecklist((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  const handleSave = () => {
    if (!checklistName) return;

    const updatedChecklist: SavedChecklist = {
      id: currentChecklistId || Date.now().toString(),
      name: checklistName,
      items: currentChecklist,
      date: new Date().toLocaleDateString(),
    };

    setChecklists((prev) => {
      if (currentChecklistId) {
        return prev.map((checklist) =>
          checklist.id === currentChecklistId ? updatedChecklist : checklist
        );
      }
      return [updatedChecklist, ...prev];
    });

    setCurrentChecklist([]);
    setChecklistName("");
    setCurrentChecklistId(null);
  };

  const handleNew = () => {
    setCurrentChecklist([]);
    setChecklistName("");
    setCurrentChecklistId(null);
  };

  const handleRestore = (checklist: SavedChecklist) => {
    setCurrentChecklist(checklist.items);
    setChecklistName(checklist.name);
    setCurrentChecklistId(checklist.id);
    setActiveTab("checklist");
  };

  return (
    <div className="w-full max-w-3xl px-4">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="checklist">Checklist SEO</TabsTrigger>
          <TabsTrigger value="history" disabled={checklists.length === 0}>
            Historique ({checklists.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="checklist">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-6 w-6" />
                  Checklist SEO
                </CardTitle>
                <CardDescription>
                  {tabLength} points essentiels pour optimiser votre
                  référencement
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Input
                    placeholder="Nom de la checklist"
                    value={checklistName}
                    onChange={(e) => setChecklistName(e.target.value)}
                    className="max-w-xs"
                  />
                  <Button
                    onClick={handleSave}
                    disabled={!checklistName}
                    className="p-2"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {currentChecklistId ? "Mettre à jour" : "Sauvegarder"}
                  </Button>
                  <Button variant="outline" onClick={handleNew} className="p-2">
                    <Plus className="h-4 w-4 mr-2" />
                    Nouveau
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] pr-4">
                  <div className="space-y-6">
                    {/* Audit et Analyse */}
                    <div className="flex items-center gap-2 mb-3">
                      <Gauge className="h-5 w-5 text-red-500" />
                      <h3 className="font-semibold">Audit et Analyse</h3>
                    </div>
                    <div className="space-y-3">
                      {seoChecklist
                        .filter((item) => item.category === "audit")
                        .map((item) => (
                          <div
                            key={item.id}
                            className="flex items-start space-x-3"
                          >
                            <Checkbox
                              id={item.id}
                              checked={currentChecklist.includes(item.id)}
                              onCheckedChange={(checked) =>
                                handleCheck(item.id, checked as boolean)
                              }
                            />
                            <label
                              htmlFor={item.id}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {item.label}
                            </label>
                          </div>
                        ))}
                    </div>

                    {/* Technique */}
                    <div className="flex items-center gap-2 mb-3 mt-6">
                      <Wrench className="h-5 w-5 text-grey-500" />
                      <h3 className="font-semibold">SEO Technique</h3>
                    </div>
                    <div className="space-y-3">
                      {seoChecklist
                        .filter((item) => item.category === "technique")
                        .map((item) => (
                          <div
                            key={item.id}
                            className="flex items-start space-x-3"
                          >
                            <Checkbox
                              id={item.id}
                              checked={currentChecklist.includes(item.id)}
                              onCheckedChange={(checked) =>
                                handleCheck(item.id, checked as boolean)
                              }
                            />
                            <label
                              htmlFor={item.id}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {item.label}
                            </label>
                          </div>
                        ))}
                    </div>

                    {/* Contenu */}
                    <div className="flex items-center gap-2 mb-3 mt-6">
                      <PencilRuler className="h-5 w-5 text-green-500" />
                      <h3 className="font-semibold">Optimisation du Contenu</h3>
                    </div>
                    <div className="space-y-3">
                      {seoChecklist
                        .filter((item) => item.category === "contenu")
                        .map((item) => (
                          <div
                            key={item.id}
                            className="flex items-start space-x-3"
                          >
                            <Checkbox
                              id={item.id}
                              checked={currentChecklist.includes(item.id)}
                              onCheckedChange={(checked) =>
                                handleCheck(item.id, checked as boolean)
                              }
                            />
                            <label
                              htmlFor={item.id}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {item.label}
                            </label>
                          </div>
                        ))}
                    </div>

                    {/* Off-page */}
                    <div className="flex items-center gap-2 mb-3 mt-6">
                      <Globe2 className="h-5 w-5 text-blue-500" />
                      <h3 className="font-semibold">SEO Off-page</h3>
                    </div>
                    <div className="space-y-3">
                      {seoChecklist
                        .filter((item) => item.category === "off-page")
                        .map((item) => (
                          <div
                            key={item.id}
                            className="flex items-start space-x-3"
                          >
                            <Checkbox
                              id={item.id}
                              checked={currentChecklist.includes(item.id)}
                              onCheckedChange={(checked) =>
                                handleCheck(item.id, checked as boolean)
                              }
                            />
                            <label
                              htmlFor={item.id}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {item.label}
                            </label>
                          </div>
                        ))}
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="history">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Historique</CardTitle>
                <CardDescription>Checklists sauvegardées</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px]">
                  <div className="space-y-4">
                    {checklists.map((checklist) => (
                      <motion.div
                        key={checklist.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-3 rounded-lg cursor-pointer transition-colors ${
                          currentChecklistId === checklist.id
                            ? "bg-primary/10 hover:bg-primary/20"
                            : "bg-muted hover:bg-muted/80"
                        }`}
                        onClick={() => handleRestore(checklist)}
                      >
                        <h4 className="font-medium mb-1">{checklist.name}</h4>
                        <p className="text-xs text-muted-foreground mb-2">
                          {checklist.date}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {checklist.items.length} points validés
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
