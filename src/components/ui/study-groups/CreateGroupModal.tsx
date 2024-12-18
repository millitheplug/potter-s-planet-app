import * as React from "react";
import { useState } from "react";
import { StudyGroupService } from "../../../services/study-group.service";

interface CreateGroupModalProps {
  userId: string;
  onClose: () => void;
  onSuccess: () => void;
}

export function CreateGroupModal({ userId, onClose, onSuccess }: CreateGroupModalProps) {
  const [groupName, setGroupName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    if (!groupName.trim()) return;
    
    setLoading(true);
    try {
      await StudyGroupService.createGroup(groupName, userId);
      onSuccess();
    } catch (error) {
      console.error("Error creating group:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <gridLayout className="bg-white p-4 rounded-lg">
      <stackLayout>
        <label className="text-xl font-bold mb-4">
          Create Study Group
        </label>
        
        <textField
          className="input p-4 mb-4 rounded-lg bg-gray-100"
          hint="Group Name"
          text={groupName}
          onTextChange={(args) => setGroupName(args.value)}
        />
        
        <button
          className="bg-blue-600 text-white p-4 rounded-lg mb-2"
          onTap={handleCreate}
          isEnabled={!loading}
        >
          {loading ? "Creating..." : "Create Group"}
        </button>
        
        <button
          className="text-blue-600"
          onTap={onClose}
          isEnabled={!loading}
        >
          Cancel
        </button>
      </stackLayout>
    </gridLayout>
  );
}