export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      app_settings: {
        Row: {
          created_at: string | null
          id: string
          key: string
          value: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          key: string
          value: string
        }
        Update: {
          created_at?: string | null
          id?: string
          key?: string
          value?: string
        }
        Relationships: []
      }
      crop_predictions: {
        Row: {
          created_at: string
          humidity: number
          id: string
          latitude: number | null
          longitude: number | null
          nitrogen: number
          ph: number
          phosphorus: number
          potassium: number
          predicted_crop: string | null
          rainfall: number
          temperature: number
        }
        Insert: {
          created_at?: string
          humidity: number
          id?: string
          latitude?: number | null
          longitude?: number | null
          nitrogen: number
          ph: number
          phosphorus: number
          potassium: number
          predicted_crop?: string | null
          rainfall: number
          temperature: number
        }
        Update: {
          created_at?: string
          humidity?: number
          id?: string
          latitude?: number | null
          longitude?: number | null
          nitrogen?: number
          ph?: number
          phosphorus?: number
          potassium?: number
          predicted_crop?: string | null
          rainfall?: number
          temperature?: number
        }
        Relationships: []
      }
      crop_rotation_rules: {
        Row: {
          benefits: string | null
          created_at: string
          current_crop: string
          id: string
          next_crop: string
          notes: string | null
          rotation_months: number
        }
        Insert: {
          benefits?: string | null
          created_at?: string
          current_crop: string
          id?: string
          next_crop: string
          notes?: string | null
          rotation_months: number
        }
        Update: {
          benefits?: string | null
          created_at?: string
          current_crop?: string
          id?: string
          next_crop?: string
          notes?: string | null
          rotation_months?: number
        }
        Relationships: []
      }
      crop_suitability: {
        Row: {
          alternative_crops: Json
          created_at: string
          id: string
          instructions: string | null
          primary_crop: string
          rules: string | null
          suggestions: string | null
        }
        Insert: {
          alternative_crops: Json
          created_at?: string
          id?: string
          instructions?: string | null
          primary_crop: string
          rules?: string | null
          suggestions?: string | null
        }
        Update: {
          alternative_crops?: Json
          created_at?: string
          id?: string
          instructions?: string | null
          primary_crop?: string
          rules?: string | null
          suggestions?: string | null
        }
        Relationships: []
      }
      crop_training_data: {
        Row: {
          created_at: string
          humidity: number
          id: number
          label: string
          nitrogen: number
          ph: number
          phosphorus: number
          potassium: number
          rainfall: number
          temperature: number
        }
        Insert: {
          created_at?: string
          humidity: number
          id?: never
          label: string
          nitrogen: number
          ph: number
          phosphorus: number
          potassium: number
          rainfall: number
          temperature: number
        }
        Update: {
          created_at?: string
          humidity?: number
          id?: never
          label?: string
          nitrogen?: number
          ph?: number
          phosphorus?: number
          potassium?: number
          rainfall?: number
          temperature?: number
        }
        Relationships: []
      }
      fertilizer_products: {
        Row: {
          created_at: string | null
          crop_name: string
          high_cost_buy_link: string
          high_cost_fertilizer: string
          high_cost_image: string | null
          high_cost_rating: number
          id: number
          low_cost_buy_link: string
          low_cost_fertilizer: string
          low_cost_image: string | null
          low_cost_rating: number
          medium_cost_buy_link: string
          medium_cost_fertilizer: string
          medium_cost_image: string | null
          medium_cost_rating: number
        }
        Insert: {
          created_at?: string | null
          crop_name: string
          high_cost_buy_link: string
          high_cost_fertilizer: string
          high_cost_image?: string | null
          high_cost_rating: number
          id?: number
          low_cost_buy_link: string
          low_cost_fertilizer: string
          low_cost_image?: string | null
          low_cost_rating: number
          medium_cost_buy_link: string
          medium_cost_fertilizer: string
          medium_cost_image?: string | null
          medium_cost_rating: number
        }
        Update: {
          created_at?: string | null
          crop_name?: string
          high_cost_buy_link?: string
          high_cost_fertilizer?: string
          high_cost_image?: string | null
          high_cost_rating?: number
          id?: number
          low_cost_buy_link?: string
          low_cost_fertilizer?: string
          low_cost_image?: string | null
          low_cost_rating?: number
          medium_cost_buy_link?: string
          medium_cost_fertilizer?: string
          medium_cost_image?: string | null
          medium_cost_rating?: number
        }
        Relationships: []
      }
      pesticide_products: {
        Row: {
          created_at: string | null
          crop_name: string
          high_cost_buy_link: string
          high_cost_image: string | null
          high_cost_pesticide: string
          high_cost_rating: number
          id: number
          low_cost_buy_link: string
          low_cost_image: string | null
          low_cost_pesticide: string
          low_cost_rating: number
          medium_cost_buy_link: string
          medium_cost_image: string | null
          medium_cost_pesticide: string
          medium_cost_rating: number
        }
        Insert: {
          created_at?: string | null
          crop_name: string
          high_cost_buy_link: string
          high_cost_image?: string | null
          high_cost_pesticide: string
          high_cost_rating: number
          id?: number
          low_cost_buy_link: string
          low_cost_image?: string | null
          low_cost_pesticide: string
          low_cost_rating: number
          medium_cost_buy_link: string
          medium_cost_image?: string | null
          medium_cost_pesticide: string
          medium_cost_rating: number
        }
        Update: {
          created_at?: string | null
          crop_name?: string
          high_cost_buy_link?: string
          high_cost_image?: string | null
          high_cost_pesticide?: string
          high_cost_rating?: number
          id?: number
          low_cost_buy_link?: string
          low_cost_image?: string | null
          low_cost_pesticide?: string
          low_cost_rating?: number
          medium_cost_buy_link?: string
          medium_cost_image?: string | null
          medium_cost_pesticide?: string
          medium_cost_rating?: number
        }
        Relationships: []
      }
      soil_requirements: {
        Row: {
          created_at: string
          crop_name: string
          humidity_max: number
          humidity_min: number
          id: string
          nitrogen_max: number
          nitrogen_min: number
          ph_max: number
          ph_min: number
          phosphorus_max: number
          phosphorus_min: number
          potassium_max: number
          potassium_min: number
          rainfall_max: number
          rainfall_min: number
          temperature_max: number
          temperature_min: number
        }
        Insert: {
          created_at?: string
          crop_name: string
          humidity_max: number
          humidity_min: number
          id?: string
          nitrogen_max: number
          nitrogen_min: number
          ph_max: number
          ph_min: number
          phosphorus_max: number
          phosphorus_min: number
          potassium_max: number
          potassium_min: number
          rainfall_max: number
          rainfall_min: number
          temperature_max: number
          temperature_min: number
        }
        Update: {
          created_at?: string
          crop_name?: string
          humidity_max?: number
          humidity_min?: number
          id?: string
          nitrogen_max?: number
          nitrogen_min?: number
          ph_max?: number
          ph_min?: number
          phosphorus_max?: number
          phosphorus_min?: number
          potassium_max?: number
          potassium_min?: number
          rainfall_max?: number
          rainfall_min?: number
          temperature_max?: number
          temperature_min?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_unique_crop_labels: {
        Args: Record<PropertyKey, never>
        Returns: {
          label: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
