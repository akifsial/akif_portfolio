"use client";
import { getImgPath } from "@/utils/image";
import React from "react";

type Props = {
  work: any;
  onClose: () => void;
};

const WorkModal: React.FC<Props> = ({ work, onClose }) => {
  if (!work) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative z-10 max-w-4xl w-full mx-4 bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg shadow-lg overflow-auto max-h-[90vh]">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
          <h3 className="text-xl">{work.title}</h3>
          <div className="flex items-center gap-3">
            {work.projectUrl && (
              <a href={work.projectUrl} target="_blank" rel="noreferrer" className="text-sm text-orange-500 underline">
                Visit Project
              </a>
            )}
            {work.githubUrl && (
              <a href={work.githubUrl} target="_blank" rel="noreferrer" className="text-sm text-gray-600 dark:text-gray-300 underline">
                Github
              </a>
            )}
            <button onClick={onClose} aria-label="Close modal" className="ml-3 text-gray-700 dark:text-gray-200">
              ✕
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Video section */}
          {work.video ? (
            <div>
              <h4 className="mb-2">Project Video</h4>
              <video src={work.video} controls className="w-full rounded-lg bg-black" />
            </div>
          ) : work.videoEmbed ? (
            <div>
              <h4 className="mb-2">Project Video</h4>
              <div className="w-full aspect-video">
                <iframe src={work.videoEmbed} title="project-video" className="w-full h-full rounded-lg" frameBorder="0" allowFullScreen />
              </div>
            </div>
          ) : null}

          {/* Description */}
          {work.description && (
            <div>
              <h4 className="mb-2">Description</h4>
              <p>{work.description}</p>
            </div>
          )}

          {/* Gallery */}
          {work.gallery && work.gallery.length > 0 && (
            <div>
              <h4 className="mb-2">Gallery</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {work.gallery.map((img: string, i: number) => (
                  // use native img to avoid layout issues with dynamic paths
                  <img key={i} src={getImgPath(img)} alt={`gallery-${i}`} className="w-full h-36 object-cover rounded-lg" />
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {work.skills && work.skills.length > 0 && (
            <div>
              <h4 className="mb-2">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {work.skills.map((sk: string, i: number) => (
                  <span key={i} className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkModal;
