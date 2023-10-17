// ! M_Teeth/Default/FLocalVertexFactory/TMobileBasePassPSFMobileDirectionalLightCSMAndLightMapPolicyHDRLinear64EnableLocalLights/0/MobileBasePassPixelShader.usf:Main
// Compiled by ShaderConductor
// @Inputs: f4;10:in_var_TEXCOORD10,f4;11:in_var_TEXCOORD11,f4;0:in_var_TEXCOORD0,f4;4:in_var_TEXCOORD4,f4;8:in_var_TEXCOORD8
// @Outputs: f4;0:out_Target0,f1;1:out_Target1
// @PackedUB: View(0): View_ViewToClip(128,16),View_ViewForward(264,3),View_ViewRectMin(512,4),View_ViewSizeAndInvSize(516,4),View_PreExposure(546,1),View_NormalCurvatureToRoughnessScaleBias(732,3),View_SkyLightColor(748,4),View_ReflectionCubemapMaxMip(786,1),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(792,3),View_bSubsurfacePostprocessEnabled(987,1),View_SSProfilesTextureSizeAndInvSize(988,4)
// @PackedUB: MobileReflectionCapture(1): MobileReflectionCapture_Params(0,4)
// @PackedUB: Primitive(2): Primitive_Flags(0,1)
// @PackedUB: MobileBasePass(3): MobileBasePass_Forward_NumLocalLights(52,1),MobileBasePass_Forward_CulledGridSize(56,3),MobileBasePass_Forward_LightGridPixelSizeShift(60,1),MobileBasePass_Forward_LightGridZParams(64,3)
// @PackedUB: PrecomputedLightingBuffer(4): PrecomputedLightingBuffer_LightMapScale(16,8),PrecomputedLightingBuffer_LightMapAdd(24,8)
// @PackedUB: MobileDirectionalLight(5): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightShadowSize(8,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowDistances(16,4),MobileDirectionalLight_DirectionalLightScreenToShadow(20,64),MobileDirectionalLight_DirectionalLightShadowMapChannelMask(84,1)
// @PackedUB: Material(6): Material_PreshaderBuffer_1(4,4),Material_PreshaderBuffer_2(8,4),Material_PreshaderBuffer_3(12,4),Material_PreshaderBuffer_4(16,4),Material_PreshaderBuffer_5(20,4),Material_PreshaderBuffer_6(24,4),Material_PreshaderBuffer_7(28,4)
// @PackedUBCopies: 0:128-0:h:0:16,0:264-0:m:0:3,0:512-0:m:4:4,0:516-0:h:16:4,0:546-0:h:20:1,0:732-0:h:24:3,0:748-0:h:28:4,0:786-0:m:8:1,0:792-0:h:32:3,0:987-0:h:36:1,0:988-0:h:40:4,1:0-1:h:0:4,2:0-2:u:0:1,3:52-3:u:0:1,3:56-3:i:0:3,3:60-3:u:4:1,3:64-3:h:0:3,4:16-4:m:0:8,4:24-4:m:8:8,5:0-5:m:0:4,5:4-5:m:4:4,5:8-5:m:8:4,5:12-5:m:12:4,5:16-5:m:16:4,5:20-5:h:0:64,5:84-5:u:0:1,6:4-6:h:0:4,6:8-6:h:4:4,6:12-6:h:8:4,6:16-6:h:12:4,6:20-6:h:16:4,6:24-6:h:20:4,6:28-6:h:24:4
// @Samplers: MobileBasePass_Forward_ForwardLocalLightBuffer(0:1),MobileBasePass_Forward_NumCulledLightsGrid(1:1),MobileBasePass_Forward_CulledLightDataGrid(2:1),View_SSProfilesTexture(3:1[View_SSProfilesSampler]),View_SSProfilesPreIntegratedTexture(4:1[View_SSProfilesPreIntegratedSampler]),MobileReflectionCapture_Texture(5:1[MobileReflectionCapture_TextureSampler]),LightmapResourceCluster_LightMapTexture(6:1[LightmapResourceCluster_LightMapSampler]),MobileDirectionalLight_DirectionalLightShadowTexture(7:1[MobileDirectionalLight_DirectionalLightShadowSampler]),Material_Texture2D_0(8:1[Material_Texture2D_0Sampler]),Material_Texture2D_1(9:1[Material_Texture2D_1Sampler]),Material_Texture2D_2(10:1[Material_Texture2D_2Sampler]),Material_Texture2D_3(11:1[Material_Texture2D_3Sampler]),Material_Texture2D_4(12:1[Material_Texture2D_4Sampler]),Material_Texture2D_5(13:1[Material_Texture2D_5Sampler]),Material_Texture2D_6(14:1[Material_Texture2D_6Sampler]),Material_Texture2D_7(15:1[Material_Texture2D_7Sampler]),Material_Texture2D_8(16:1[Material_Texture2D_8Sampler]),Material_Texture2D_9(17:1[Material_Texture2D_9Sampler]),Material_Texture2D_10(18:1[Material_Texture2D_10Sampler])
#version 320 es
#if defined(GL_EXT_control_flow_attributes)
#define out_var_SV_Target1 out_Target1
#define out_var_SV_Target0 out_Target0
#define in_var_TEXCOORD8 in_TEXCOORD8
#define in_var_TEXCOORD4 in_TEXCOORD4
#define in_var_TEXCOORD0 in_TEXCOORD0
#define in_var_TEXCOORD11 in_TEXCOORD11
#define in_var_TEXCOORD10 in_TEXCOORD10
#extension GL_EXT_control_flow_attributes : require
#define SPIRV_CROSS_FLATTEN [[flatten]]
#define SPIRV_CROSS_BRANCH [[dont_flatten]]
#define SPIRV_CROSS_UNROLL [[unroll]]
#define SPIRV_CROSS_LOOP [[dont_unroll]]
#else
#define SPIRV_CROSS_FLATTEN
#define SPIRV_CROSS_BRANCH
#define SPIRV_CROSS_UNROLL
#define SPIRV_CROSS_LOOP
#endif
precision mediump float;
precision highp int;

#define View_SSProfilesTextureSizeAndInvSize (pc0_h[10])
#define View_bSubsurfacePostprocessEnabled (pc0_h[9].x)
#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight (pc0_h[8].xyz)
#define View_ReflectionCubemapMaxMip (pc0_m[2].x)
#define View_SkyLightColor (pc0_h[7])
#define View_NormalCurvatureToRoughnessScaleBias (pc0_h[6].xyz)
#define View_PreExposure (pc0_h[5].x)
#define View_ViewSizeAndInvSize (pc0_h[4])
#define View_ViewRectMin (pc0_m[1])
#define View_ViewForward (pc0_m[0].xyz)
#define View_ViewToClip (mat4(pc0_h[0 + 0].xyzw,pc0_h[0 + 1].xyzw,pc0_h[0 + 2].xyzw,pc0_h[0 + 3].xyzw))
#define SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler ps3
#define SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler ps4
#define SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler ps5
#define SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler ps6
#define SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler ps7
#define SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler ps8
#define SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler ps9
#define SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler ps10
#define SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler ps11
#define SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler ps12
#define SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler ps13
#define SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler ps14
#define SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler ps15
#define SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler ps16
#define SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler ps17
#define SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler ps18
uniform mediump vec4 pc0_m[3];
uniform highp vec4 pc0_h[11];


#define MobileReflectionCapture_Params (pc1_h[0])
uniform highp vec4 pc1_h[1];


#define Primitive_Flags (pc2_u[0].x)
uniform uvec4 pc2_u[1];


#define MobileBasePass_Forward_LightGridZParams (pc3_h[0].xyz)
#define MobileBasePass_Forward_LightGridPixelSizeShift (pc3_u[1].x)
#define MobileBasePass_Forward_CulledGridSize (pc3_i[0].xyz)
#define MobileBasePass_Forward_NumLocalLights (pc3_u[0].x)
uniform highp vec4 pc3_h[1];
uniform ivec4 pc3_i[1];
uniform uvec4 pc3_u[2];


#define PrecomputedLightingBuffer_LightMapAdd(Offset) (pc4_m[2 + int(Offset)])
#define PrecomputedLightingBuffer_LightMapScale(Offset) (pc4_m[0 + int(Offset)])
uniform mediump vec4 pc4_m[4];


#define MobileDirectionalLight_DirectionalLightShadowMapChannelMask (pc5_u[0].x)
#define MobileDirectionalLight_DirectionalLightScreenToShadow(Offset) (mat4(pc5_h[0 + (int(Offset) * 4) + 0].xyzw,pc5_h[0 + (int(Offset) * 4) + 1].xyzw,pc5_h[0 + (int(Offset) * 4) + 2].xyzw,pc5_h[0 + (int(Offset) * 4) + 3].xyzw))
#define MobileDirectionalLight_DirectionalLightShadowDistances (pc5_m[4])
#define MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale (pc5_m[3])
#define MobileDirectionalLight_DirectionalLightShadowSize (pc5_m[2])
#define MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition (pc5_m[1])
#define MobileDirectionalLight_DirectionalLightColor (pc5_m[0])
uniform uvec4 pc5_u[1];
uniform highp vec4 pc5_h[16];
uniform mediump vec4 pc5_m[5];


#define Material_PreshaderBuffer_7 (pc6_h[6])
#define Material_PreshaderBuffer_6 (pc6_h[5])
#define Material_PreshaderBuffer_5 (pc6_h[4])
#define Material_PreshaderBuffer_4 (pc6_h[3])
#define Material_PreshaderBuffer_3 (pc6_h[2])
#define Material_PreshaderBuffer_2 (pc6_h[1])
#define Material_PreshaderBuffer_1 (pc6_h[0])
uniform highp vec4 pc6_h[7];


layout(binding = 0) uniform highp samplerBuffer ps0;
layout(binding = 1) uniform highp usamplerBuffer ps1;
layout(binding = 2) uniform highp usamplerBuffer ps2;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler;
uniform highp sampler2D SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler;
uniform highp sampler2D SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler;
uniform highp sampler2DArray SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler;
uniform highp samplerCube SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler;

layout(location = 0) in vec4 in_var_TEXCOORD10;
layout(location = 1) in vec4 in_var_TEXCOORD11;
layout(location = 2) in highp vec4 in_var_TEXCOORD0[1];
layout(location = 3) in highp vec4 in_var_TEXCOORD4;
layout(location = 4) in highp vec4 in_var_TEXCOORD8;
layout(location = 0) out vec4 out_var_SV_Target0;
layout(location = 1) out highp float out_var_SV_Target1;

vec4 _532;
vec3 _533;

void main()
{
    highp float _542 = 1.0 / gl_FragCoord.w;
    highp vec2 _560 = gl_FragCoord.xy - View_ViewRectMin.xy;
    highp vec4 _569 = vec4(((_560 * View_ViewSizeAndInvSize.zw) - vec2(0.5)) * vec2(2.0, -2.0), gl_FragCoord.z, 1.0) * _542;
    highp vec3 _578;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _578 = -View_ViewForward;
    }
    else
    {
        _578 = normalize(-in_var_TEXCOORD8.xyz);
    }
    vec2 _186 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _589 = vec4(_186, sqrt(clamp(1.0 - dot(_186, _186), 0.0, 1.0)), 1.0).xyz * Material_PreshaderBuffer_1.xyz;
    float _94 = _589.z + 1.0;
    vec2 _193 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec4 _600 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp float _603 = _600.x * Material_PreshaderBuffer_1.w;
    vec3 _98 = vec4(_193, sqrt(clamp(1.0 - dot(_193, _193), 0.0, 1.0)), 1.0).xyz * vec3(_603, _603, 1.0);
    vec3 _103 = vec3(_589.xy, _94);
    vec3 _107 = vec3(_98.xy * vec2(-1.0), _98.z);
    vec3 _113 = (_103 * vec3(dot(_103, _107))) - (vec3(_94) * _107);
    float _115 = _113.z + 1.0;
    vec2 _200 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_2.x)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _616 = mix(vec3(0.0, 0.0, 1.0), vec4(_200, sqrt(clamp(1.0 - dot(_200, _200), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_2.y));
    vec3 _123 = vec3(_113.xy, _115);
    vec3 _127 = vec3(_616.xy * vec2(-1.0), _616.z);
    vec3 _133 = (_123 * vec3(dot(_123, _127))) - (vec3(_115) * _127);
    float _135 = _133.z + 1.0;
    highp vec4 _620 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec2 _207 = (_620.xy * vec2(2.0)) - vec2(1.0);
    highp float _623 = sqrt(clamp(1.0 - dot(_207, _207), 0.0, 1.0));
    vec3 _140 = vec3(_133.xy, _135);
    vec3 _143 = vec3(vec4(_207, _623, 1.0).xy * vec2(-1.0), _623);
    vec3 _150 = normalize(mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz) * ((_140 * vec3(dot(_140, _143))) - (vec3(_135) * _143))) * 1.0;
    highp vec3 _628 = (-_578) + ((_150 * dot(_150, _578)) * 2.0);
    highp vec4 _632 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp vec4 _639 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, Material_PreshaderBuffer_3.xy);
    highp vec4 _643 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec3 _151 = _632.xyz;
    highp vec4 _650 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, Material_PreshaderBuffer_4.xy);
    highp vec4 _656 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _162 = _656.x;
    vec3 _164 = mix(mix(_151, _639.xyz * (_151 / _643.xyz), vec3(0.669921875)), (_650.xyz * (_151 * vec3(1.0380132198333740234375, 1.27521789073944091796875, 1.815602779388427734375))) * vec3(Material_PreshaderBuffer_4.z), vec3(_162));
    highp vec4 _663 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler, Material_PreshaderBuffer_5.yz);
    float _216 = _663.x;
    float _217 = _663.y;
    float _214 = _663.z;
    vec3 _173 = _600.xyz;
    vec3 _175 = normalize(in_var_TEXCOORD11.xyz);
    vec3 _222 = clamp(mix(_164, _164 * vec3((_216 <= 0.0) ? 0.0 : pow(_216, 0.300048828125), (_217 <= 0.0) ? 0.0 : pow(_217, 0.300048828125), (_214 <= 0.0) ? 0.0 : pow(_214, 0.300048828125)), vec3(_162 * clamp(1.0 - ((1.0 - _656.y) * Material_PreshaderBuffer_6.y), 0.0, 1.0))) * _173, vec3(0.0), vec3(1.0));
    float _223 = clamp((_173 * vec3(smoothstep(0.0, Material_PreshaderBuffer_6.z, dot(((vec3(dot(_578, _175)) * _175) * vec3(2.0)) - _578, _578)) * 0.449951171875)).x, 0.0, 1.0);
    highp float _685 = max(0.015625, clamp(mix(Material_PreshaderBuffer_7.x, Material_PreshaderBuffer_6.w, _162), 0.0, 1.0));
    vec3 _226 = dFdx(_150);
    vec3 _227 = dFdy(_150);
    highp float _691 = clamp(pow(max(dot(_226, _226), dot(_227, _227)), View_NormalCurvatureToRoughnessScaleBias.z), 0.001000000047497451305389404296875, 1.0);
    vec3 _231 = vec3(0.07999999821186065673828125 * _223);
    highp vec2 _694 = in_var_TEXCOORD4.xy * vec2(1.0, 0.5);
    highp vec4 _699 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _694);
    highp vec4 _701 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _694 + vec2(0.0, 0.5));
    vec3 _238 = (_699.xyz * PrecomputedLightingBuffer_LightMapScale(0).xyz) + PrecomputedLightingBuffer_LightMapAdd(0).xyz;
    float _251 = dot(_238, vec3(0.300048828125, 0.58984375, 0.1099853515625));
    float _250 = (exp2((_251 * 16.0) - 8.0) - 0.00390625) * max(0.0, dot((_701 * PrecomputedLightingBuffer_LightMapScale(1)) + PrecomputedLightingBuffer_LightMapAdd(1), vec4(_150.yzx, 1.0)));
    highp float _712 = _569.w;
    highp vec4 _736;
    int _719 = 0;
    for (;;)
    {
        if (_719 < 4)
        {
            if (_712 < MobileDirectionalLight_DirectionalLightShadowDistances[uint(_719)])
            {
                _736 = MobileDirectionalLight_DirectionalLightScreenToShadow(_719) * vec4(_569.xy, _712, 1.0);
                break;
            }
            _719++;
            continue;
        }
        else
        {
            _736 = vec4(0.0);
            break;
        }
    }
    float _394;
    if (_736.z > 0.0)
    {
        highp vec2 _746 = (_736.xy * MobileDirectionalLight_DirectionalLightShadowSize.xy) - vec2(0.5);
        highp vec2 _747 = fract(_746);
        highp vec2 _751 = (floor(_746) + vec2(1.0)) * MobileDirectionalLight_DirectionalLightShadowSize.zw;
        highp vec4 _757 = vec4((min(1.0 - _736.z, 0.999989986419677734375) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - 1.0);
        highp vec4 _759 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _751, ivec2(-1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _757, vec4(0.0), vec4(1.0));
        highp vec4 _764 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _751, ivec2(1, -1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _757, vec4(0.0), vec4(1.0));
        highp vec4 _769 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _751, ivec2(-1, 1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _757, vec4(0.0), vec4(1.0));
        highp vec4 _774 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _751, ivec2(1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _757, vec4(0.0), vec4(1.0));
        highp float _776 = _747.x;
        highp float _777 = 1.0 - _776;
        highp vec4 _804 = _532;
        _804.x = (((_759.w * _777) + _759.z) + _764.w) + (_764.z * _776);
        highp vec4 _808 = _804;
        _808.y = (((_759.x * _777) + _759.y) + _764.x) + (_764.y * _776);
        highp vec4 _812 = _808;
        _812.z = (((_769.w * _777) + _769.z) + _774.w) + (_774.z * _776);
        highp vec4 _816 = _812;
        _816.w = (((_769.x * _777) + _769.y) + _774.x) + (_774.y * _776);
        highp float _817 = _747.y;
        highp float _826 = clamp((_712 * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.x) + MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.y, 0.0, 1.0);
        _394 = mix(dot(_816, vec4(1.0 - _817, 1.0, 1.0, _817) * 0.111111111938953399658203125), 1.0, _826 * _826);
    }
    else
    {
        _394 = 1.0;
    }
    float _264 = _394 * mix(1.0, 0.0, dot(vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u)), vec4(1.0)));
    highp float _849 = max(0.0, dot(_150, normalize(_578 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
    uint _852 = uint(((vec4(_533.x, _533.y, _533.z, vec4(1.0, 1.0, 1.0, Material_PreshaderBuffer_7.y).w) * View_bSubsurfacePostprocessEnabled).w * 255.0) + 0.5);
    highp vec2 _861 = (vec2(uvec2(5u, _852)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec4 _863 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _861, 0.0);
    float _278 = _863.z;
    highp float _866 = max(clamp(_685 * (_863.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
    float _282 = clamp(_685 * (_863.y * 2.0), 0.0, 1.0);
    float _268 = mix(_866, _282, _278);
    float _269 = dot(_150, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
    highp float _873 = float(_852);
    highp vec2 _882 = (vec2(uvec2(0u, _852)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec3 _885 = vec3(1.0) * max(0.0, dot(_150, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz));
    vec3 _285 = _222 * 0.318407952785491943359375;
    highp float _890 = 1.0 - (_849 * _849);
    float _286 = _866 * _866;
    highp float _891 = _849 * _286;
    highp float _893 = _286 / (_890 + (_891 * _891));
    float _290 = _282 * _282;
    highp float _894 = _849 * _290;
    highp float _896 = _290 / (_890 + (_894 * _894));
    vec4 _304 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _268) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _305 = _304.x;
    float _308 = exp2((-9.28125) * clamp(abs(dot(_150, _578)) + 1.0013580322265625e-05, 0.0, 1.0));
    vec2 _315 = (vec2(-1.0400390625, 1.0400390625) * ((min(_305 * _305, _308) * _305) + _304.y)) + _304.zw;
    float _299 = clamp(_223 * 4.0, 0.0, 1.0);
    uvec2 _934 = uvec2(uint(_560.x), uint(_560.y)) >> (uvec2(MobileBasePass_Forward_LightGridPixelSizeShift) & uvec2(31u));
    vec3 _395;
    if (float(MobileReflectionCapture_Params.y > 0.0) != 0.0)
    {
        _395 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _628, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_685, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _395 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _628, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_685, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    vec4 _339 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _685) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _340 = _339.x;
    vec2 _348 = (vec2(-1.0400390625, 1.0400390625) * ((min(_340 * _340, _308) * _340) + _339.y)) + _339.zw;
    highp vec3 _983 = (((_238 * (_250 / max(9.9999997473787516355514526367188e-06, _251))) * _222) + ((((mix(_885 * _264, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_269 - (max(2.0 * _269, 0.4000000059604644775390625) * (1.0 - sqrt(_264))), -1.0) * 0.5) + 0.5, _691, _873), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _882, 0.0).xyz) * _285) * 1.0) + ((_885 * (((_231 * _315.x) + vec3(_299 * _315.y)) * (mix(min(_893 * _893, 2048.0), min(_896 * _896, 2048.0), _278) * ((_268 * 0.25) + 0.25)))) * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) * (MobileDirectionalLight_DirectionalLightColor.xyz * _264))) + (((_395 * mix(1.0, min(_250 / max(MobileReflectionCapture_Params.x, 9.9999997473787516355514526367188e-05), View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z), smoothstep(0.0, 1.0, clamp((_685 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * 1.0) * ((_231 * _348.x) + vec3(_299 * _348.y)));
    uint _984 = ((((min(uint(max(0.0, log2((_542 * MobileBasePass_Forward_LightGridZParams.x) + MobileBasePass_Forward_LightGridZParams.y) * MobileBasePass_Forward_LightGridZParams.z)), uint(MobileBasePass_Forward_CulledGridSize.z - 1)) * uint(MobileBasePass_Forward_CulledGridSize.y)) + _934.y) * uint(MobileBasePass_Forward_CulledGridSize.x)) + _934.x) * 2u;
    uvec4 _992 = texelFetch(ps1, int(_984 + 1u));
    uint _993 = _992.x;
    uint _1008 = (uint((Primitive_Flags & 1024u) != 0u) | (uint((Primitive_Flags & 2048u) != 0u) << 1u)) | (uint((Primitive_Flags & 4096u) != 0u) << 2u);
    uint _1009 = min(min(texelFetch(ps1, int(_984)).x, MobileBasePass_Forward_NumLocalLights), MobileBasePass_Forward_NumLocalLights);
    highp vec3 _1011;
    _1011 = _983;
    highp vec3 _1012;
    SPIRV_CROSS_LOOP
    for (uint _1014 = 0u; _1014 < _1009; _1011 = _1012, _1014++)
    {
        uint _1023 = texelFetch(ps2, int(_993 + _1014)).x * 6u;
        highp vec4 _1025 = texelFetch(ps0, int(_1023));
        highp vec4 _1027 = texelFetch(ps0, int(_1023 + 1u));
        highp vec4 _1029 = texelFetch(ps0, int(_1023 + 2u));
        highp vec4 _1031 = texelFetch(ps0, int(_1023 + 3u));
        highp float _1032 = _1025.w;
        highp float _1033 = _1032 * _1032;
        highp vec3 _1034 = _1025.xyz;
        highp vec3 _1035 = in_var_TEXCOORD8.xyz - _1034;
        if ((dot(_1035, _1035) * _1033) > 1.0)
        {
            _1012 = _1011;
            continue;
        }
        uint _1042 = floatBitsToUint(_1029.w);
        if (((_1042 >> 8u) & _1008) == 0u)
        {
            _1012 = _1011;
            continue;
        }
        highp float _1051 = _1027.w;
        highp vec3 _1067 = _1034 - in_var_TEXCOORD8.xyz;
        highp float _1068 = dot(_1067, _1067);
        highp vec3 _1070 = _1067 * inversesqrt(_1068);
        highp float _1087;
        if (_1051 == 0.0)
        {
            highp float _1079 = _1068 * _1033;
            highp float _1082 = clamp(1.0 - (_1079 * _1079), 0.0, 1.0);
            _1087 = (_1082 * _1082) * (1.0 / (_1068 + 1.0));
        }
        else
        {
            highp vec3 _1074 = _1067 * _1032;
            _1087 = pow(1.0 - clamp(dot(_1074, _1074), 0.0, 1.0), _1051);
        }
        highp float _1098;
        if (((_1042 >> 16u) & 3u) == 2u)
        {
            highp float _1095 = clamp((dot(_1070, _1029.xyz) - _1031.x) * _1031.y, 0.0, 1.0);
            _1098 = _1087 * (_1095 * _1095);
        }
        else
        {
            _1098 = _1087;
        }
        highp vec3 _1145;
        SPIRV_CROSS_BRANCH
        if (_1098 > 0.0)
        {
            float _351 = mix(1.0, 0.0, dot(vec4(float((_1042 & 1u) != 0u), float((_1042 & 2u) != 0u), float((_1042 & 4u) != 0u), float((_1042 & 8u) != 0u)), vec4(1.0)));
            highp float _1106 = max(0.0, dot(_150, normalize(_578 + _1070)));
            highp vec4 _1108 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _861, 0.0);
            float _361 = _1108.z;
            highp float _1111 = max(clamp(_685 * (_1108.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
            float _365 = clamp(_685 * (_1108.y * 2.0), 0.0, 1.0);
            float _352 = mix(_1111, _365, _361);
            float _353 = dot(_150, _1070);
            highp vec3 _1123 = vec3(1.0) * max(0.0, dot(_150, _1070));
            highp float _1128 = 1.0 - (_1106 * _1106);
            float _368 = _1111 * _1111;
            highp float _1129 = _1106 * _368;
            highp float _1131 = _368 / (_1128 + (_1129 * _1129));
            float _372 = _365 * _365;
            highp float _1132 = _1106 * _372;
            highp float _1134 = _372 / (_1128 + (_1132 * _1132));
            vec4 _384 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _352) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _385 = _384.x;
            vec2 _393 = (vec2(-1.0400390625, 1.0400390625) * ((min(_385 * _385, _308) * _385) + _384.y)) + _384.zw;
            _1145 = (((mix(_1123 * _351, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_353 - (max(2.0 * _353, 0.4000000059604644775390625) * (1.0 - sqrt(_351))), -1.0) * 0.5) + 0.5, _691, _873), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _882, 0.0).xyz) * _285) * 1.0) + ((_1123 * (((_231 * _393.x) + vec3(_299 * _393.y)) * (mix(min(_1131 * _1131, 2048.0), min(_1134 * _1134, 2048.0), _361) * ((_352 * 0.25) + 0.25)))) * 1.0)) * ((_1027.xyz * _1098) * _351);
        }
        else
        {
            _1145 = vec3(0.0);
        }
        _1012 = _1011 + _1145;
    }
    vec3 _77 = _1011 * 1.0;
    vec4 _396 = vec4(_77.x, _77.y, _77.z, _532.w);
    _396.w = 0.0;
    highp vec3 _1148 = min((_396.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_1148.x, _1148.y, _1148.z, _396.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

