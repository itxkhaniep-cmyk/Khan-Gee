import React, { useState } from 'react';
import { UserProgress, Language } from '../types';
import { 
  FileCode, Play, Download, CheckCircle2, AlertTriangle, Layers, 
  Sparkles, Terminal, FileSpreadsheet, Eye, ChevronRight, HelpCircle,
  Copy, Check, RefreshCw, Cpu, Database, ArrowRight
} from 'lucide-react';

interface XmlAutomationLabProps {
  progress: UserProgress;
  onNavigateToLesson: (lessonId: string) => void;
  onNavigateToPractice: (challengeId: string) => void;
}

export const XmlAutomationLab: React.FC<XmlAutomationLabProps> = ({
  progress,
  onNavigateToLesson,
  onNavigateToPractice,
}) => {
  const [activeTab, setActiveTab] = useState<'simulator' | 'deconstructor' | 'guide'>('simulator');
  const [selectedCodeSection, setSelectedCodeSection] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [simulationLogs, setSimulationLogs] = useState<string[]>([]);
  const [hasRun, setHasRun] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // Sample XML Data simulating CVAT / Label Studio AI annotation
  const sampleXmlContent = `<?xml version="1.0" encoding="utf-8"?>
<data>
  <!-- Asset 1: Delivery Van with Coordinates & Custom Attributes -->
  <asset id="V-101" label="Delivery_Van" type="Commercial">
    <coordinates type="LineString">31.5204, 74.3587; 31.5210, 74.3592</coordinates>
    <attributes>
      <attribute name="color">White</attribute>
      <attribute name="vehicle_speed">55km/h</attribute>
      <attribute name="occluded">false</attribute>
    </attributes>
    <annotation id="box-1" frame_number="0" type="bbox" frame="frame_0000.png" frame_width="1920" frame_height="1080" points="120,450,380,680" />
    <annotation id="box-2" frame_number="1" type="bbox" frame="frame_0001.png" frame_width="1920" frame_height="1080" points="140,460,400,690" />
  </asset>

  <!-- Asset 2: Pedestrian Crossing (No Coordinates, Missing Speed attribute) -->
  <asset id="P-202" label="Pedestrian" type="Person">
    <attributes>
      <attribute name="color">Dark_Blue</attribute>
      <attribute name="weather">Rainy</attribute>
    </attributes>
    <annotation id="box-3" frame_number="14" type="bbox" frame="frame_0014.png" frame_width="1920" frame_height="1080" points="890,320,950,510" />
  </asset>
</data>`;

  // Simulated Parsed CSV rows following the user's exact logic
  const sampleParsedRows = [
    {
      frameNumber: '1', // 0 + 1 rule
      assetId: 'V-101',
      label: 'Delivery_Van',
      assetType: 'Commercial',
      coordType: 'LineString',
      lat: '31.5204',
      lon: '74.3587',
      annoId: 'box-1',
      shape: 'bbox',
      frameName: 'frame_0000.png',
      canvas: '1920x1080',
      points: '120,450,380,680',
      color: 'White',
      vehicle_speed: '55km/h',
      occluded: 'false',
      weather: '-' // Dynamic fill with "-"
    },
    {
      frameNumber: '2', // 1 + 1 rule
      assetId: 'V-101',
      label: 'Delivery_Van',
      assetType: 'Commercial',
      coordType: 'LineString',
      lat: '31.5204',
      lon: '74.3587',
      annoId: 'box-2',
      shape: 'bbox',
      frameName: 'frame_0001.png',
      canvas: '1920x1080',
      points: '140,460,400,690',
      color: 'White',
      vehicle_speed: '55km/h',
      occluded: 'false',
      weather: '-'
    },
    {
      frameNumber: '15', // 14 + 1 rule
      assetId: 'P-202',
      label: 'Pedestrian',
      assetType: 'Person',
      coordType: '-',
      lat: '-',
      lon: '-',
      annoId: 'box-3',
      shape: 'bbox',
      frameName: 'frame_0014.png',
      canvas: '1920x1080',
      points: '890,320,950,510',
      color: 'Dark_Blue',
      vehicle_speed: '-', // Dynamic fill with "-"
      occluded: '-',
      weather: 'Rainy'
    }
  ];

  const codeSections = [
    {
      id: 'imports',
      title: '1. Libraries Import & Purpose',
      subtitle: 'glob, os, BeautifulSoup, pandas',
      lines: 'Lines 1 - 4',
      code: `import glob
import os
from bs4 import BeautifulSoup
import pandas as pd`,
      why: 'Har library aik specific superpower deti hai: `glob` file search ke liye, `os` Windows paths aur folders ke liye, `bs4` XML tags ko parse karne ke liye, aur `pandas` tabular CSV export ke liye.',
      whatIfOmitted: 'Agar `glob` na ho to folder ke andar `*.xml` files dhoondna mushkil hoga. Agar `bs4` na ho to XML text ko manually parse karna padega jo bohat mushkil aur bugs se bhara hota hai.',
      learningLessonId: 'lesson-19-os-glob-automation'
    },
    {
      id: 'folder_check',
      title: '2. Folder Verification & Auto-Creation',
      subtitle: 'os.path.exists & os.makedirs',
      lines: 'Lines 9 - 17',
      code: `if not os.path.exists(xml_folder_path):
    print(f"❌ Error: Folder not found → {xml_folder_path}")
    return

os.makedirs(csv_output_folder, exist_ok=True)
xml_files = glob.glob(os.path.join(xml_folder_path, "*.xml"))`,
      why: 'Production scripts kabhi blind run nahi hotay. Pehle check kiya jata hai ke source folder mojood hai ya nahi. Phir `os.makedirs(..., exist_ok=True)` se output folder agar mojood na ho to khud-ba-khud ban jata hai.',
      whatIfOmitted: 'Agar output folder computer par na ho to CSV save karte waqt `FileNotFoundError` aayega aur code crash ho jayega.',
      learningLessonId: 'lesson-19-os-glob-automation'
    },
    {
      id: 'xml_heal',
      title: '3. XML Safe Read & Auto-Repair',
      subtitle: 'errors="ignore" & endswith("</data>")',
      lines: 'Lines 27 - 33',
      code: `with open(xml_path, "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

if not content.strip().endswith("</data>"):
    content = content.strip() + "</data>"

soup = BeautifulSoup(content, "lxml-xml")`,
      why: '`errors="ignore"` corrupted characters par crash nahi hone deta. Aur `.endswith("</data>")` check karta hai ke agar annotation tool ne closing tag nahi lagaya to script khud jod deta hai.',
      whatIfOmitted: 'Baaz XML files adhoori export hoti hain. BeautifulSoup bina closing tag ke XMLSyntaxError de kar ruk jata hai.',
      learningLessonId: 'lesson-20-xml-beautifulsoup'
    },
    {
      id: 'dynamic_schema',
      title: '4. Dynamic Schema Discovery (set())',
      subtitle: 'set() guarantees unique column names',
      lines: 'Lines 37 - 60',
      code: `all_attr_names = set()   # dynamic attributes collect karne ke liye

for asset in soup.find_all("asset"):
    attrs_el = asset.find("attributes")
    if attrs_el:
        for attr in attrs_el.find_all("attribute"):
            name = attr.get("name")
            if name:
                all_attr_names.add(name)

dynamic_cols = sorted(list(all_attr_names))
final_columns = fixed_cols + dynamic_cols`,
      why: 'Aapko pehle se pata nahi hota ke XML mein kon kon si attributes (color, speed, weather, occluded) mojood hain. `set()` duplicate ke bina tamam unique naam dhoond nikalta hai.',
      whatIfOmitted: 'Agar hardcode columns rakhein to koi naya attribute (jaise "driver_gender" ya "helmet") aane par wo data CSV mein add nahi hoga aur zaya ho jayega.',
      learningLessonId: 'lesson-21-pandas-data-wrangling'
    },
    {
      id: 'gps_split',
      title: '5. GIS / GPS Coordinates Parsing',
      subtitle: '.split(";")[0].split(",")',
      lines: 'Lines 69 - 80',
      code: `lat, lon = "-", "-"
if coords_text != "-" and "," in coords_text:
    first_point = coords_text.split(";")[0]
    parts = first_point.split(",")
    if len(parts) >= 2:
        lat = parts[0].strip()
        lon = parts[1].strip()`,
      why: 'GPS LineStrings format `"lat,lon;lat,lon"` mein aati hain. Pehle `;` se pehla point liya jata hai aur phir `,` se Latitude aur Longitude alag kiye jaate hain.',
      whatIfOmitted: 'Puri lambi string aik hi column mein chali jayegi, jisse Google Maps ya GIS mapping tools usay read nahi kar sakein ge.',
      learningLessonId: 'lesson-22-capstone-xml-pipeline'
    },
    {
      id: 'frame_rule',
      title: '6. Frame Number Normalization (+1 Rule)',
      subtitle: 'raw_frame.isdigit() & str(int(raw_frame) + 1)',
      lines: 'Lines 105 - 110',
      code: `raw_frame = (anno.get("frame_number") or "-").strip()

if raw_frame.isdigit():
    frame_num = str(int(raw_frame) + 1)
else:
    frame_num = raw_frame`,
      why: 'AI models video frames ko 0 se ginna shuru karte hain (Frame 0, Frame 1). Jabke human video players pehla frame 1 dikhate hain. `isdigit()` check safely int me convert karke 1 jama karta hai.',
      whatIfOmitted: 'Aapka CSV data video playback se 1 frame peechay chalega, jisse labeling verify karte waqt mismatch hoga.',
      learningLessonId: 'lesson-22-capstone-xml-pipeline'
    },
    {
      id: 'pandas_export',
      title: '7. Tabular DataFrame & Excel CSV Export',
      subtitle: 'pd.DataFrame & encoding="utf-8-sig"',
      lines: 'Lines 135 - 142',
      code: `df = pd.DataFrame(all_rows, columns=final_columns)
df.to_csv(csv_out, index=False, encoding="utf-8-sig")
print(f"✅ Saved → {csv_out}")
print(f"   Total Rows: {len(df)} | Columns: {len(final_columns)}")`,
      why: '`index=False` se be-faida 0,1,2 numbering nahi aati. Aur `utf-8-sig` (Byte Order Mark) Excel ko batata hai ke special symbols ko sahi format mein dikhaye.',
      whatIfOmitted: 'Excel mein Urdu ya symbols garbar ho jayenge aur row ke shuru mein faltu 0, 1, 2 number column ban jayega.',
      learningLessonId: 'lesson-21-pandas-data-wrangling'
    },
    {
      id: 'batch_safety',
      title: '8. Batch Fault-Tolerance (try...except)',
      subtitle: 'One broken file does not break 1000 files',
      lines: 'Lines 144 - 146',
      code: `try:
    # ... file processing logic ...
except Exception as e:
    print(f"❌ Error in {file_name}: {e}\\n")`,
      why: 'Jab aap 5,000 files process kar rahe hon aur 200th file corrupted ho, to poora program band hone ki bajaye sirf us file par error print hota hai aur baaqi 4,999 files successfully save ho jati hain.',
      whatIfOmitted: 'Aik choti si corrupted file poore ghanton ke process ko beech mein hi crash kar degi.',
      learningLessonId: 'lesson-12-error-handling'
    }
  ];

  const handleRunSimulation = () => {
    setIsProcessing(true);
    setSimulationLogs([]);
    setHasRun(false);

    const logMessages = [
      '⏳ Dynamic XML → CSV Engine Starting...',
      '🔍 Scanning directory: C:\\Users\\deo.2\\Downloads\\xml_folder',
      '📁 Total 2 XML files mili hain.',
      '--------------------------------------------------',
      '📖 Processing: check_1.xml (2 Assets, 3 Annotations)',
      '   📍 Discovered Dynamic Attributes: [color, occluded, vehicle_speed, weather]',
      '   🔄 Applied Frame +1 Normalization Rule (0 ➔ 1, 1 ➔ 2, 14 ➔ 15)',
      '   🗺️ Parsed GPS Waypoints: Lat 31.5204 | Lon 74.3587',
      '   📊 Assembling Pandas DataFrame with 16 columns...',
      '✅ Saved → check_1.csv',
      '   Total Rows: 3 | Columns: 16 | Encoding: utf-8-sig',
      '--------------------------------------------------',
      '🏁 Sab files kamyabi se process ho gayi hain! Ready for Excel.'
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < logMessages.length) {
        setSimulationLogs(prev => [...prev, logMessages[i]]);
        i++;
      } else {
        clearInterval(interval);
        setIsProcessing(false);
        setHasRun(true);
      }
    }, 180);
  };

  const handleDownloadCsv = () => {
    // Generate CSV string
    const headers = [
      "Frame Number", "Asset ID", "Label", "Asset Type", "Coordinates Type",
      "Latitude", "Longitude", "Annotation ID", "Annotation Shape Type",
      "Frame Name", "Frame Canvas Dimensions", "Bounding Box Points",
      "color", "vehicle_speed", "occluded", "weather"
    ];
    
    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + 
      headers.join(",") + "\n" +
      sampleParsedRows.map(r => [
        r.frameNumber, r.assetId, r.label, r.assetType, r.coordType,
        r.lat, r.lon, r.annoId, r.shape, r.frameName, r.canvas, `"${r.points}"`,
        r.color, r.vehicle_speed, r.occluded, r.weather
      ].join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "check_1_converted.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fullCodeText = `import glob
import os
from bs4 import BeautifulSoup
import pandas as pd


def run_dynamic_xml_to_csv(xml_folder_path, csv_output_folder):
    print("⏳ Dynamic XML → CSV Engine Starting...\\n")

    if not os.path.exists(xml_folder_path):
        print(f"❌ Error: Folder not found → {xml_folder_path}")
        return

    os.makedirs(csv_output_folder, exist_ok=True)
    xml_files = glob.glob(os.path.join(xml_folder_path, "*.xml"))

    if not xml_files:
        print("⚠️ Koi XML file nahi mili.")
        return

    print(f"🔍 Total {len(xml_files)} XML files mili hain.\\n")

    for xml_path in xml_files:
        file_name = os.path.basename(xml_path)
        base_name = os.path.splitext(file_name)[0]
        csv_out = os.path.join(csv_output_folder, f"{base_name}.csv")

        print(f"📖 Processing: {file_name}")

        try:
            with open(xml_path, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()

            if not content.strip().endswith("</data>"):
                content = content.strip() + "</data>"

            soup = BeautifulSoup(content, "lxml-xml")

            all_rows = []
            all_attr_names = set()

            for asset in soup.find_all("asset"):
                attrs_el = asset.find("attributes")
                if attrs_el:
                    for attr in attrs_el.find_all("attribute"):
                        name = attr.get("name")
                        if name:
                            all_attr_names.add(name)

            fixed_cols = [
                "Frame Number", "Asset ID", "Label", "Asset Type",
                "Coordinates Type", "Latitude", "Longitude",
                "Annotation ID", "Annotation Shape Type", "Frame Name",
                "Frame Canvas Dimensions", "Bounding Box Points"
            ]

            dynamic_cols = sorted(list(all_attr_names))
            final_columns = fixed_cols + dynamic_cols

            for asset in soup.find_all("asset"):
                asset_id = (asset.get("id") or "-").strip()
                label = (asset.get("label") or "-").strip()
                asset_type = (asset.get("type") or "-").strip()

                coords_el = asset.find("coordinates")
                coords_text = coords_el.text.strip() if (coords_el and coords_el.text) else "-"
                coords_type = (coords_el.get("type") if coords_el else "-") or "-"

                lat, lon = "-", "-"
                if coords_text != "-" and "," in coords_text:
                    first_point = coords_text.split(";")[0]
                    parts = first_point.split(",")
                    if len(parts) >= 2:
                        lat = parts[0].strip()
                        lon = parts[1].strip()

                attr_dict = {name: "-" for name in dynamic_cols}
                attrs_el = asset.find("attributes")
                if attrs_el:
                    for attr in attrs_el.find_all("attribute"):
                        name = attr.get("name")
                        value = attr.text.strip() if attr.text else "-"
                        if name in attr_dict:
                            attr_dict[name] = value

                annotations = asset.find_all("annotation")

                if not annotations:
                    row = {
                        "Frame Number": "-", "Asset ID": asset_id, "Label": label,
                        "Asset Type": asset_type, "Coordinates Type": coords_type,
                        "Latitude": lat, "Longitude": lon, "Annotation ID": "-",
                        "Annotation Shape Type": "-", "Frame Name": "-",
                        "Frame Canvas Dimensions": "-", "Bounding Box Points": "-"
                    }
                    row.update(attr_dict)
                    all_rows.append(row)
                else:
                    for anno in annotations:
                        raw_frame = (anno.get("frame_number") or "-").strip()

                        if raw_frame.isdigit():
                            frame_num = str(int(raw_frame) + 1)
                        else:
                            frame_num = raw_frame

                        anno_id = (anno.get("id") or "-").strip()
                        shape = (anno.get("type") or "-").strip()
                        frame_name = (anno.get("frame") or "-").strip()
                        w = (anno.get("frame_width") or "-").strip()
                        h = (anno.get("frame_height") or "-").strip()
                        canvas = f"{w}x{h}" if (w != "-" and h != "-") else "-"
                        points = (anno.get("points") or "-").strip()

                        row = {
                            "Frame Number": frame_num, "Asset ID": asset_id,
                            "Label": label, "Asset Type": asset_type,
                            "Coordinates Type": coords_type, "Latitude": lat,
                            "Longitude": lon, "Annotation ID": anno_id,
                            "Annotation Shape Type": shape, "Frame Name": frame_name,
                            "Frame Canvas Dimensions": canvas, "Bounding Box Points": points
                        }
                        row.update(attr_dict)
                        all_rows.append(row)

            df = pd.DataFrame(all_rows, columns=final_columns)
            df.to_csv(csv_out, index=False, encoding="utf-8-sig")
            print(f"✅ Saved → {csv_out}")
            print(f"   Total Rows: {len(df)} | Columns: {len(final_columns)}\\n")

        except Exception as e:
            print(f"❌ Error in {file_name}: {e}\\n")

    print("🏁 Sab files process ho gayi hain!")`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(fullCodeText);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-amber-500/10 via-sky-500/10 to-emerald-500/10 rounded-2xl border border-amber-200 dark:border-slate-800 p-6 md:p-8 mb-8 shadow-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-bold font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Specialized Real-World Automation Lab</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Dynamic XML ➔ CSV Production Engine
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Aapka bataya hua asal AI annotation script! Yahan iske har lafz ka tajziya mojood hai taake aap AI par inhisar karne ki bajaye khud aese professional batch scripts likhne ke qabil ban sakein.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigateToLesson('lesson-22-capstone-xml-pipeline')}
              className="flex items-center gap-2 px-4 py-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              <span>Parhein: Sabaq #22</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              {copiedCode ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              <span>{copiedCode ? 'Copied!' : 'Copy Full Code'}</span>
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 mt-6 pt-6 border-t border-slate-200/60 dark:border-slate-800/80">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'simulator'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </button>
          <button
            onClick={() => setActiveTab('deconstructor')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'deconstructor'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Line-by-Line Code Breakdown</span>
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'guide'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>"Khud Kaise Banayein?" Guide</span>
          </button>
        </div>
      </div>

      {/* TAB 1: INTERACTIVE SIMULATOR */}
      {activeTab === 'simulator' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Input XML Mock Panel */}
            <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs flex flex-col">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-3">
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span className="font-bold text-xs text-slate-800 dark:text-slate-200">
                    Source: check_1.xml (CVAT Computer Vision)
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 px-2 py-0.5 rounded font-bold">
                  Input XML
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                Yeh woh asal XML hai jisme Delivery Van aur Pedestrian ke bounding boxes, GPS coordinates, aur custom attributes mojood hain:
              </p>
              <pre className="flex-1 bg-slate-900 text-slate-200 font-mono-code text-[11px] p-4 rounded-xl overflow-x-auto leading-relaxed max-h-[360px]">
                {sampleXmlContent}
              </pre>
            </div>

            {/* Live Terminal & Runner Panel */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs flex flex-col">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-bold text-xs text-slate-800 dark:text-slate-200">
                    Live Engine Terminal Console
                  </span>
                </div>
                <button
                  onClick={handleRunSimulation}
                  disabled={isProcessing}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer ${
                    isProcessing
                      ? 'bg-slate-300 dark:bg-slate-700 text-slate-500 cursor-not-allowed'
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  }`}
                >
                  <Play className={`w-3.5 h-3.5 ${isProcessing ? 'animate-spin' : ''}`} />
                  <span>{isProcessing ? 'Running Engine...' : 'Run Dynamic XML ➔ CSV'}</span>
                </button>
              </div>

              {/* Console Output Window */}
              <div className="flex-1 bg-slate-950 text-slate-100 font-mono-code text-xs p-4 rounded-xl min-h-[300px] max-h-[360px] overflow-y-auto space-y-1.5 border border-slate-800">
                {simulationLogs.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-slate-500 py-12">
                    <Terminal className="w-8 h-8 mb-2 opacity-50" />
                    <span>Upar "Run Dynamic XML ➔ CSV" button dabayein</span>
                    <span className="text-[11px] text-slate-600 mt-1">Script files ko scan kar ke tabular data banayega</span>
                  </div>
                ) : (
                  simulationLogs.map((log, idx) => (
                    <div 
                      key={idx} 
                      className={`leading-relaxed ${
                        log.startsWith('✅') ? 'text-emerald-400 font-bold' :
                        log.startsWith('🏁') ? 'text-amber-400 font-bold' :
                        log.startsWith('📖') ? 'text-sky-300 font-semibold' :
                        'text-slate-300'
                      }`}
                    >
                      {log}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Resulting Tabular CSV Matrix */}
          {hasRun && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm animate-fadeIn">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <FileSpreadsheet className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      Generated CSV Output: check_1.csv
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Frame Number +1 rule applied, Lat/Lon parsed, aur dynamic missing columns "-" se bhare gaye hain.
                  </p>
                </div>

                <button
                  onClick={handleDownloadCsv}
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer shrink-0"
                >
                  <Download className="w-4 h-4" />
                  <span>Download check_1.csv (Open in Excel)</span>
                </button>
              </div>

              {/* Table Preview */}
              <div className="overflow-x-auto mt-4 rounded-xl border border-slate-200 dark:border-slate-800">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 font-mono">
                      <th className="p-3">Frame #</th>
                      <th className="p-3">Asset ID</th>
                      <th className="p-3">Label</th>
                      <th className="p-3">Latitude</th>
                      <th className="p-3">Longitude</th>
                      <th className="p-3">Canvas</th>
                      <th className="p-3">Bounding Box Points</th>
                      <th className="p-3 bg-amber-500/10 text-amber-700 dark:text-amber-400">color</th>
                      <th className="p-3 bg-amber-500/10 text-amber-700 dark:text-amber-400">vehicle_speed</th>
                      <th className="p-3 bg-amber-500/10 text-amber-700 dark:text-amber-400">weather</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-[11px]">
                    {sampleParsedRows.map((r, i) => (
                      <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="p-3 font-bold text-amber-600 dark:text-amber-400">{r.frameNumber}</td>
                        <td className="p-3 font-semibold text-sky-600 dark:text-sky-400">{r.assetId}</td>
                        <td className="p-3 text-slate-800 dark:text-slate-200">{r.label}</td>
                        <td className="p-3 text-emerald-600 dark:text-emerald-400">{r.lat}</td>
                        <td className="p-3 text-emerald-600 dark:text-emerald-400">{r.lon}</td>
                        <td className="p-3 text-slate-500">{r.canvas}</td>
                        <td className="p-3 text-slate-600 dark:text-slate-300">{r.points}</td>
                        <td className="p-3 bg-amber-50/40 dark:bg-amber-950/20 font-bold">{r.color}</td>
                        <td className="p-3 bg-amber-50/40 dark:bg-amber-950/20">{r.vehicle_speed}</td>
                        <td className="p-3 bg-amber-50/40 dark:bg-amber-950/20 text-slate-400">{r.weather}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: LINE-BY-LINE DECONSTRUCTOR */}
      {activeTab === 'deconstructor' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Section Selector */}
          <div className="lg:col-span-4 space-y-2">
            <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-3">
              Code Ke 8 Ahem Parts
            </h3>
            {codeSections.map((sec, idx) => (
              <button
                key={sec.id}
                onClick={() => setSelectedCodeSection(idx)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                  selectedCodeSection === idx
                    ? 'bg-amber-500/15 border-amber-500/40 text-slate-900 dark:text-white shadow-xs font-bold'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs">{sec.title}</span>
                  <span className="text-[10px] font-mono text-slate-400">{sec.lines}</span>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate font-normal">
                  {sec.subtitle}
                </div>
              </button>
            ))}
          </div>

          {/* Section Deep-Dive Card */}
          <div className="lg:col-span-8 space-y-6">
            {codeSections[selectedCodeSection] && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold">
                      {codeSections[selectedCodeSection].lines}
                    </span>
                    <button
                      onClick={() => onNavigateToLesson(codeSections[selectedCodeSection].learningLessonId)}
                      className="text-xs text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Is topic ka sabaq dekhein</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                    {codeSections[selectedCodeSection].title}
                  </h2>
                </div>

                {/* Code Block */}
                <div className="rounded-xl overflow-hidden border border-slate-800">
                  <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">Python Implementation</span>
                    <span className="text-[10px] text-amber-400 font-mono">Production Grade</span>
                  </div>
                  <pre className="bg-slate-900 text-amber-300 font-mono-code text-xs p-4 overflow-x-auto leading-relaxed">
                    {codeSections[selectedCodeSection].code}
                  </pre>
                </div>

                {/* "Kyun Likha Gaya?" (Why) */}
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 rounded-xl space-y-1">
                  <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Kyun Likha Gaya? (The Core Logic)</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed pl-6">
                    {codeSections[selectedCodeSection].why}
                  </p>
                </div>

                {/* "Agar Na Likhein To Kya Hoga?" (What if omitted) */}
                <div className="p-4 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800/40 rounded-xl space-y-1">
                  <div className="flex items-center gap-2 text-rose-800 dark:text-rose-300 font-bold text-xs">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Agar Yeh Code Na Likhein To Kya Hoga? (Failure Mode)</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed pl-6">
                    {codeSections[selectedCodeSection].whatIfOmitted}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: "KHUD KAISE BANAYEIN?" ROADMAP */}
      {activeTab === 'guide' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              AI Ke Baghair Aesa Code Khud Likhne Ke 5 Marhale (Roadmap)
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
              Agar aap agle 2 se 3 hafte rozana in 5 skills par practice karein, to aap is tarah ka koi bhi complex data pipeline bina AI ki madad ke khud likh sakenge:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                Folder Scan & OS Paths
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                `glob.glob("*.xml")` aur `os.path.join` ko yaad karein. Hamesha raw string `r"C:\..."` likhein taake Windows error na aaye.
              </p>
              <button
                onClick={() => onNavigateToPractice('challenge-14-path-extractor')}
                className="text-xs text-sky-600 dark:text-sky-400 font-bold hover:underline flex items-center gap-1 cursor-pointer pt-2"
              >
                <span>Challenge #14 Hal Karein</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                BeautifulSoup Se Tag Dhoondna
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                `find()` aur `find_all()` ka farq samjhein. Attributes ke liye `tag.get("attr")` aur inner text ke liye `tag.text` use karein.
              </p>
              <button
                onClick={() => onNavigateToLesson('lesson-20-xml-beautifulsoup')}
                className="text-xs text-emerald-600 dark:text-emerald-400 font-bold hover:underline flex items-center gap-1 cursor-pointer pt-2"
              >
                <span>Sabaq #20 Parhein</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                Dynamic set() & Dict Comprehension
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Mukhtalif files ke columns ko <code>set()</code> se collect karein, aur dict comprehension <code>{"{col: '-' for col in cols}"}</code> se missing data fill karein.
              </p>
              <button
                onClick={() => onNavigateToPractice('challenge-12-dynamic-attributes')}
                className="text-xs text-amber-600 dark:text-amber-400 font-bold hover:underline flex items-center gap-1 cursor-pointer pt-2"
              >
                <span>Challenge #12 Hal Karein</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
                4
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                GIS Strings & Coordinates Split
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                `split(";")` aur `split(",")` se Latitude aur Longitude alag karne ki aadat dalein.
              </p>
              <button
                onClick={() => onNavigateToPractice('challenge-11-coordinates-parser')}
                className="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline flex items-center gap-1 cursor-pointer pt-2"
              >
                <span>Challenge #11 Hal Karein</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-sm">
                5
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                Pandas & UTF-8-SIG CSV Export
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Hamesha `df.to_csv(..., index=False, encoding="utf-8-sig")` likhein taake Excel mein data 100% theek display ho.
              </p>
              <button
                onClick={() => onNavigateToLesson('lesson-21-pandas-data-wrangling')}
                className="text-xs text-teal-600 dark:text-teal-400 font-bold hover:underline flex items-center gap-1 cursor-pointer pt-2"
              >
                <span>Sabaq #21 Parhein</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
