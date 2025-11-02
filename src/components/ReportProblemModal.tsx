import { useState, type FormEvent } from "react";
import Input from "./Input";

interface Props {
  onClose: () => void;
}

export default function ReportProblemModal({ onClose }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState<File[]>([]); // image state

  // Handle image selection
  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    setImages([...e.target.files]); // support multiple images
  }

  function submitProblem(e: FormEvent) {
    e.preventDefault();

    // Prepare form data for backend
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);
    images.forEach((file) => formData.append("images", file));

    // TODO: send formData to API
    console.log("Submitting problem:", { title, description, location, images });

    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-lg border border-zinc-300">
        <h2 className="text-xl font-semibold mb-4 text-zinc-900">
          Report a Problem
        </h2>

        <form onSubmit={submitProblem} className="space-y-4">
          <Input
            label="Title"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            required
            placeholder="Describe the issue..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-28 p-3 border border-zinc-300 rounded-lg bg-white text-zinc-800 focus:ring-2 focus:ring-zinc-600 focus:outline-none"
          />

          <Input
            label="Location"
            type="text"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          {/* Image Upload */}
          <div className="mt-2">
            <label className="block mb-1 font-semibold">Upload Images</label>

            {/* Hidden file input */}
            <input
              type="file"
              multiple
              accept="image/*"
              id="file-upload"
              className="hidden"
              onChange={handleImageChange}
            />

            {/* Custom button */}
            <label
              htmlFor="file-upload"
              className="px-4 py-2 bg-zinc-800 text-white rounded-lg cursor-pointer hover:bg-zinc-900"
            >
              Choose Images
            </label>
          </div>

          {/* Preview selected images */}
          {images.length > 0 && (
            <div className="flex gap-2 mt-2 flex-wrap">
              {images.map((file, idx) => (
                <div key={idx} className="relative">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`preview-${idx}`}
                    className="w-24 h-24 object-cover rounded-lg border"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setImages(images.filter((_, i) => i !== idx))
                    }
                    className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-full"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-zinc-300 rounded-lg hover:bg-zinc-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-900"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
